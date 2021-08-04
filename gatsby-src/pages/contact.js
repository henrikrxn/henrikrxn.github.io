import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Information" />
      <section vocab="http://schema.org/">
        Henrik Røn<br />
        <address property="email">
          <a href="mailto:henrik.rxn@gmail.com">henrik.rxn@gmail.com</a>
        </address>
        <br />
        <a href="https://linkedin.com/in/henrikr" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
    </Layout>
  )
}

export default Contact

export const contactQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
