import React from 'react'
import { Link } from 'gatsby'
import classes from './../assets/scss/About.module.scss';

import Layout from '../components/layout'

const AboutPage = () => (
  <div className={classes.About}> 
    <h1>Hi from the About page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
