import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Hi from the About page</h1>
   	<form>
   		<input placeHolder="Name" type="text" />
   		<input placeHolder="email" type="email"  />
   		<textarea placeHolder="Message"></textarea>

   	</form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
 
export default ContactPage
