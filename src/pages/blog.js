import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import classes from './../assets/scss/Blogs.module.scss';

import Layout from '../components/layout'

const BlogPage = ({ data }) => {

	return (
		<Layout>
			<div className={classes.Blogs}> 
				<h1>Blog</h1>
				<p>A list of blog posts fetched from my WP portfolio.</p>

				<ul className={classes.BlogList}>
					{data.allWordpressPost.edges.map(({ node }) => {
						const postLink = '/posts/' + node.slug;
	
						return (

					        <li className={classes.Blog}>
					        	<Link to={postLink}>
					        		{node.title}
					        		
					        	</Link> 
					        	<span>{node.date}</span>
					        </li>
				    	)
				    })}
			    </ul>
			    <a className="button-one" style={{marginTop : '25px'}} href="http://ivelin.me/blog/" target="_blank">To the full version.</a>
	  		</div>
		</Layout>
	)
}
export const pageQuery = graphql`
  query {
    allWordpressPost{
      edges {
        node {
          title
          slug
          link
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default BlogPage