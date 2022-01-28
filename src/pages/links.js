import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"

const LinksPage = ({ data, location }) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`

  return (
      <div>
        <Seo title="Link Page" />
        <div className="px-4 m-auto py-4 h-screen bg-center bg-cover" style={{backgroundImage: "url('/images/mountain.jpg')"}}>
          <div className="logo pl-16 my-16 max-w-md m-auto">
            <img src="/images/title.png" width="320px" />
          </div>
          <div className="text-center">
          <div className="bg-white px-4 py-2 rounded-md max-w-md m-auto my-4">
            <a href="https://www.worldscrafter.com">
              <h2 className="text-xl">Worlds Crafter</h2>
            </a>
          </div>
            <div className="bg-white px-4 py-2 rounded-md max-w-md m-auto my-4">
              <a href="https://apps.apple.com/us/app/city-encounters/id1583857845">
                <h2 className="text-xl">City Encounters IOS APP</h2>
              </a>
            </div>
            <div className="bg-white px-4 py-2 rounded-md max-w-md m-auto my-4">
              <a href="/">
                <h2 className="text-xl">Visit Site</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LinksPage
