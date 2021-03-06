import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Card
      type="intro"
      orientation="no"
      title="404"
      body={<p>Not found. <Link to="/">Back to preston.so</Link></p>}
    />
  </Layout>
)

export default NotFoundPage
