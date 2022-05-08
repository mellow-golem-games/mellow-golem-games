import * as React from "react"
import { Link } from "gatsby"
import Social from './Social'


// Sidebar sections



// ABOUT 2min talbr - CIRCLE LOGO - TEXT - SOCIAL LINKS

const Sidebar = () => {

  return (
    <div className="md:w-3/12 py-8 px-4">
      <div className="text-center">
          <img className="mx-auto" style={{borderRadius: "50%", maxWidth: "200px"}} src="/images/logo.jpg" width="60%" />
          <p className="text-sm pt-2">Mellow Golem Games is a team of game developers and RPG lovers. </p>
          <div className="pt-2 text-center">
            <Social />
          </div>
      </div>
    </div>
  )
}

export default Sidebar
