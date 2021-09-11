import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import AppPage from "../../components/AppPage"
import Seo from "../../components/seo"

import { wizardLord } from '../../games/wizardLord'

const BlogIndex = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo title="Mellow Golem Games | Tomb Of The Wizard Lord" />
      <AppPage project={wizardLord} />

    </Layout>
  )
}

export default BlogIndex
