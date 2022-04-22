import * as React from "react"
import { Link, graphql } from "gatsby"

import { games } from '../games/games';
import { apps } from '../apps/apps';

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Button from "../components/Button"
import Card from "../components/Card"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
      <div className="py-16 text-center px-3 max-w-3xl m-auto">
        <h2 className="text-4xl">Who are We?</h2>
        <p className="pt-8">Mellow Golem Games is an indie game studio located in the suburbs of Chicago with a focus on creating RPGs. We follow the simple rule that we build games that we'd want to play.</p>
        <p className="pt-4">While our main focus is game development, we also hope to produce valuable content for tabletop and other RPG media. We love what we do, and that passion shines through on everything we do.</p>
      </div>
      <div className="py-16 max-w-6xl m-auto px-4">
        <h2 className="text-4xl text-primary mb-12 styled-header">Our Games</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {games.map(game => {
            return (
              <Card details={game} />
            )
          })}
        </div>
        <div className="mt-6 text-center">
          <Button text="All Games" link="/games" />
        </div>
      </div>
      <div className="py-16 max-w-6xl m-auto px-4">
        <h2 className="text-4xl text-primary mb-12 styled-header">Our Apps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {apps.map(app => {
            return (
              <Card details={app} />
            )
          })}
        </div>
        <div className="mt-6 text-center">
          <Button text="All Apps" link="/apps" />
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
