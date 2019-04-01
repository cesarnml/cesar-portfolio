import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Cesar Napoleon Mejia Leiva`, `portfolio`, `developer`, `web`]}
    />
    <h1>So It Begins</h1>
    <p>Code more ...</p>
  </Layout>
)

export default IndexPage
