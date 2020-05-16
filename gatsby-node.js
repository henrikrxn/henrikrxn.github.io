const path = require('path')
const normalize = require('normalize-path')
const slug = require('slug')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const blogPost = path.resolve('./src/templates/blog-post.js')
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___published], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                titleForSlug
                published
                updated(formatString: "MMMM DD, YYYY")
                redirects
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const path = post.node.fields.slug
    const {
      frontmatter: { redirects }
    } = post.node

    if (redirects) {
      redirects.forEach(fromPath => {
        createRedirect({
          fromPath,
          toPath: path,
          redirectInBrowser: true,
          isPermanent: true
        })
      })
    }
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const pathPrefixBasedOnPublishedDate = node.frontmatter.published.replace(/-/g, '/');
    let postNameForSlug
    if (node.frontmatter.titleForSlug) {
      postNameForSlug = slug(node.frontmatter.titleForSlug, { lower: true })
    }
    else {
      postNameForSlug = createFilePath({ node, getNode })
    }
    
    const value = normalize(`/${pathPrefixBasedOnPublishedDate}/${postNameForSlug}`, false)
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String!
      published: Date! @dateformat(formatString: "YYYY-MM-DD")
      titleForSlug: String
      updated: Date @dateformat(formatString: "YYYY-MM-DD")
      description: String
      tags: [String!]
      redirects: [String!]
    }
  `
    createTypes(typeDefs)
}

// For debugging in Chrome
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}
