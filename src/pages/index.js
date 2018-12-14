import React from 'react'
import { Link } from 'gatsby'
import classes from '../assets/scss/Home.module.scss'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
  	<div className={classes.Home}> 
	    <div className={classes.HomeImage}>
	      <Image />
	    </div>
	    <h1>"hello from the other siiiideee..."</h1>
	    <p>I have created this portfolio, just for fun. Browse around it and enjoy it as much as I did when I was building it. Don't forget to say 'hi' before you leave. </p>
	</div>
  </Layout>
)

export default IndexPage
