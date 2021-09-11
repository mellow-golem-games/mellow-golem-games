import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import AppPage from "../../components/AppPage"
import Seo from "../../components/seo"

import { dungeonMaker } from '../../apps/DungeonMaker'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Mellow Golem Games | Dungeon Maker" />
      <AppPage project={dungeonMaker} />

    </Layout>
  )
}

export default BlogIndex
