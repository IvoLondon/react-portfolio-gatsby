const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require('path');
const slash = require(`slash`)



// BLOG
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }`
)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {} // additional data can be passed via context
          });
        });

    });
}


// PROJECTS FROM WP
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // ==== PAGES (WORDPRESS NATIVE) ====
    
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                template
                format
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const postTemplate = path.resolve("./src/templates/posts.js")
      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
          path: `/posts/${edge.node.slug}/`,
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })
}