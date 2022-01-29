import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import ProjectPage from "../../components/ProjectPage"
import Seo from "../../components/seo"

import { worldsCrafter } from '../../apps/worldsCrafter'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Mellow Golem Games | Worlds Crafter" />
      <ProjectPage project={worldsCrafter} />

    </Layout>
  )
}

export default BlogIndex
