import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <img src="/images/logos/logo.svg" alt="Sic Kode Web Design Logo" />
      <h1>Hi!</h1>
      <p>Welcome to your new Gatsby site.</p>
    </Layout>
  )
}

export default IndexPage
