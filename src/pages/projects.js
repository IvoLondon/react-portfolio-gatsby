import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import classes from './../assets/scss/Projects.module.scss';

import Layout from '../components/layout'

const ProjectsPage = ({ data }) => {

	return (
		<Layout>
			<div className={classes.Projects}> 
				<h1>Projects</h1>
				<p>A list of projects fetched from my WP portfolio.</p>

				<ul className={classes.ProjectList}>
					{data.allWordpressWpProjects.edges.map(({ node }) => {
						{ console.log(node) }
						const fluid = node.featured_media.localFile.childImageSharp.fluid;
						return (
					        <li className={classes.Project}>
						
					        	<a target="_blank" href={node.link} title={node.title}>
					        		<div className={classes.filter}></div>
					        		<img src={fluid.src} alt={node.title} />
					        	</a>
					        </li>
				    	)
				    })}
			    </ul>
			    <a className="button-one" style={{marginTop : '25px'}} href="http://ivelin.me/projects/" target="_blank">Full portfolio</a>
	  		</div>
		</Layout>
	)
}
export const pageQuery = graphql`
  query {
    allWordpressWpProjects{
      edges {
        node {
          title
          slug
          link
          date
          featured_media{
	          localFile {
	            childImageSharp{
	              fluid(maxWidth: 700) {
	                src  
	              }
	              
	            }
	          }
	        }
        }
      }
    }
  }
`

export default ProjectsPage