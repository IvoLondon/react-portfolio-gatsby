import React from 'react'
import { Link } from 'gatsby'
import classes from './../assets/scss/Projects.module.scss';

import Layout from '../components/layout'

const ProjectsPage = () => (
	<Layout>
		<div className={classes.Projects}> 
			<h1>Hi from the projects page</h1>
			<p>Welcome to page 2</p>
			<Link to="/">Go back to the homepage</Link>
  		</div>
	</Layout>
)

export default ProjectsPage
