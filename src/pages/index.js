import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
      <div className="bg-dark text-white text-center px-3 text-3xl py-16">
        <h2>Indie Game Devs and RPG Lovers</h2>
      </div>
      <div className="py-16 text-center  px-3 max-w-3xl m-auto">
        <h2 className="text-3xl">Who are We?</h2>
        <p className="pt-8">Mellow Golem Games is an indie game studio located in the suburbs of Chicago with a focus on creating RPGs. We follow the simple rule that we build games that we'd want to play.</p>
        <p className="pt-4">While our main focus is game development, we also hope to produce valuable content for tabletop and other RPG media. We love what we do, and that passion shines through on everything we do.</p>
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
