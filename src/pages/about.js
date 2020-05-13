import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h2>Professional bio</h2>
      <p>
        I work as a freelance senior software developer / solution architect in the Copenhagen
        area in Denmark.
      </p>
      <p>
        I have worked with software development for more than 20 years, most of the time
        as a developer, but have also worked a couple of years as a project manager and
        had many of the other roles involved when working on software projects.
      </p>
      <p>
        Most of my work has been on backs-end, but I have done a number of project 
        involving front-end, both web and desktop.
      </p>

      <h2>Professional areas of interest</h2>
      <p>
        I tend to be more interested in things that are useful as part of my general
        toolbox, i.e. across programming languages and technologies:
      </p>
      <ul>
        <li>continuous integration, delivery and deployment</li>
        <li>development "infrastructure": tools for version control, build, test and deployment</li>
        <li>automated testing</li>
        <li>design both at the code and architecture level</li>
        <li>event driven architecture and messaging</li>
        <li>reactive systems</li>
      </ul>

      <h2>What is this blog for</h2>
      <p>
        It is my intention to use this blog for:
      </p>
        <ul>
          <li>writing about technical stuff I use either at work or in hobby projects.</li>
          <li>reviewing books or blogs I read.</li>
        </ul>
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
