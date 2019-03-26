import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Cesar Napoleon Mejia Leiva`, `portfolio`, `developer`, `web`]}
    />
    <h1>So It Begins</h1>
    <p>Code more ...</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
