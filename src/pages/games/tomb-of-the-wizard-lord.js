import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import ProjectPage from "../../components/ProjectPage"
import Seo from "../../components/seo"

import { wizardLord } from '../../games/wizardLord'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Mellow Golem Games | Tomb Of The Wizard Lord" />
      <ProjectPage project={wizardLord} />

    </Layout>
  )
}

export default BlogIndex
