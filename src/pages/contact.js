import * as React from "react"
import { Link, graphql } from "gatsby"

import { games } from '../games/games';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Mellow Golem Games | Contact" />
      <div className="py-16 pt-32 max-w-6xl m-auto px-4" style={{minHeight: "calc(100vh - 91px)"}}>
        <h1 className="text-4xl text-primary mb-12 text-center">Contact Us</h1>
        <p className="text-center">Need to get in touch with us? Drop us a line at info@mellowgolem.com and we'll get back to you.</p>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
