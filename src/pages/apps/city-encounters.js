import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import ProjectPage from "../../components/ProjectPage"
import Seo from "../../components/seo"

import { cityEncounters } from '../../apps/cityEncounters'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Mellow Golem Games | City Encounters" />
      <ProjectPage project={cityEncounters} />

    </Layout>
  )
}

export default BlogIndex
