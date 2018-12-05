import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import classes from './../assets/scss/Contact.module.scss'

const ContactPage = () => (

  <Layout>
    <div className="">
      <h1>Get in touch</h1>
     	<form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input placeHolder="Your Name" type="text" name="name" />   
        </p>
        <p>
          <input placeHolder="Your Email" type="email" name="email" />
        </p>
        <p>
          <textarea placeHolder="Message" name="message"></textarea>
        </p>
        <p>
          <button className="button-one" type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)
 
export default ContactPage
