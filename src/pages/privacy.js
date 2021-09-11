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
      <Seo title="Mellow Golem Games | Privacy Policy" />
      <div className="py-16 pt-32 max-w-6xl m-auto px-4 blog-post" style={{minHeight: "calc(100vh - 91px)"}}>
        <h1 className="text-4xl text-primary mb-12 text-center">Privacy Policy</h1>
        <p>Last Updated: September 10, 2021</p>
        <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from mellowgolemgames.com (the “Site”), or when using one of applications unless a separate privacy policy is provided for said application.</p>

        <h2>Information We Collect</h2>
        <p>For a better experience, while using The Site, we collect certain personal identifiable information. This includes, but isn't limited to, information about your web browser, IP address, time zone, email address, and some of the cookies that are installed on your device.</p>

        <h2>How We Use Your Information</h2>
        <p>We use your information to help better optimize our site and provide relevant content to our users. In general, we look at aggregated information to help see broad trends.</p>
        <p>If you provide your email address we use that to send you targeted news and updates about our site and work. Providing your email address is optional, and each email from us will incldue a link to have us remove your from our email list if you wish.</p>

        <h2>Do We Sell Or Share Your Information?</h2>
        <p>We do not sell your information.</p>
        <p>However, we may share it with qualified 3rd parties to help faciliate services such as marketing. We currently use Google Analytics for tracking purposes and Mailchimp for email marketing services.</p>

        <h2>Links to 3rd Parties</h2>
        <p>Throughout our site you may find links to 3rd party sites. We do not control the content on these sites, and we urge you to read their privacy policies in order to understand how they use your data.</p>

        <h2>Age Restriction</h2>
        <p>Our Site is intended for adults and we do not knowingly collect or store information from children under the age of 18.</p>

        <h2>Changes To This Policy</h2>
        <p>We reserve the right to change this policy in the future for any reason. When we do so, we will provide the updated policy on this page. Please check back regularly to ensure you have the most up to date information.</p>

        <h2>Contact</h2>
        <p>If you have any questions, concerns, or wish us to remove any data related to you please email us at: info@mellowgolem.com</p>
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
