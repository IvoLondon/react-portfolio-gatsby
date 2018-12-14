import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import classes from './../assets/scss/Contact.module.scss'

const ContactPage = () => (

  <Layout>
    <div className={classes.Contact}>
      <h1>Get in touch</h1>
      <p>Don't be shy, drop me a message and say hi!</p>
     	<form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />

          <input placeHolder="Your Name" type="text" name="name" />   

          <input placeHolder="Your Email" type="email" name="email" />

          <textarea placeHolder="Message" name="message"></textarea>

          <button className="button-one" type="submit">Send</button>

      </form>
    </div>
  </Layout>
)
 
export default ContactPage
