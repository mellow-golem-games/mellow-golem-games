import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import ProjectPage from "../../components/ProjectPage"
import Seo from "../../components/seo"

import { dungeonMaker } from '../../apps/dungeonMaker'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Mellow Golem Games | Dungeon Maker" />
      <ProjectPage project={dungeonMaker} />

    </Layout>
  )
}

export default BlogIndex
