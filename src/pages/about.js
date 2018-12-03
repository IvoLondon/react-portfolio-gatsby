import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the About page</h1>
    <p>Welcome to about 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
