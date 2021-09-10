import * as React from "react"
import { Link, graphql } from "gatsby"

import { games } from '../games/games';
import { apps } from '../apps/apps';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/PostCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="py-16 pt-32 max-w-6xl m-auto px-4">
        <h2 className="text-4xl text-primary mb-12 text-center">Recent Posts</h2>
        <div className="grid grid-cols-2 gap-8 px-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
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
