import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Get in touch</h1>
   	<form name="contact" netlify>
   		<input placeHolder="Name" type="text" />
   		<input placeHolder="email" type="email"  />
   		<textarea placeHolder="Message"></textarea>
   		<input type="submit" placeHolder="Submit" />
   	</form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
 
export default ContactPage
