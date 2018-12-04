import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Get in touch</h1>
   	<form name="contact" netlify method="POST">
   		<input placeHolder="Name" type="text" name="name" />
   		<input placeHolder="email" type="email" name="email" />
   		<textarea placeHolder="Message" name="message"></textarea>
   		<input type="submit" placeHolder="Submit" />
   	</form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
 
export default ContactPage
