import React from "react"
import SEO from "../components/seo"
import Homepage from "../components/homepage"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <div>
      <Homepage />
      <SEO title="Home" />
    </div>
  </Layout>
)

export default IndexPage
