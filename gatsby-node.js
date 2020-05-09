const path = require(`path`)
const normalize = require('normalize-path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
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
                published
                updated(formatString: "MMMM DD, YYYY")
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
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
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
    const postNameBasedOnFolderName = createFilePath({ node, getNode })
    const value = normalize(`/${pathPrefixBasedOnPublishedDate}/${postNameBasedOnFolderName}`, false)
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
      tags: [String!]
      description: String
      updated: Date @dateformat(formatString: "YYYY-MM-DD")
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
