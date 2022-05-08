import * as React from "react"
import { Link, graphql } from "gatsby"

import { games } from '../games/games';
import { apps } from '../apps/apps';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/PostCard"
import Sidebar from "../components/Sidebar"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="md:flex pt-32">
        <div className="py-8 max-w-6xl m-auto px-4 md:w-9/12">
          <h2 className="text-4xl text-primary">Welcome To The Blog!</h2>
          <p className="max-w-xl py-8">
            Welcome to the Mellow Golem Games blog. Here we write about all topics related to game design and RPGs. You can also follow along with our dev logs or stay up to date on what we're working on.
          </p>
          <div className="grid md:grid-cols-2 gap-8 px-4">
            {posts.map(post => {
              return <PostCard post={post} key={post.fields.slug}/>
            })}
          </div>
        </div>
        <Sidebar />
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
          thumbnail
        }
      }
    }
  }
`
