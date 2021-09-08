import * as React from "react"
import { Link } from "gatsby"


const Nav = () => {

  return (
    <div className="text-white fixed px-4 py-4 z-10 w-full bg-no-repeat bg-repeat-x" style={{backgroundImage: "url('/images/navBg.png')"}}>
      <div className="max-w-6xl m-auto flex justify-between">
        <div className="logo pl-12">
          <a href="/"><img src="/images/title.png" width="220px" /></a>
        </div>
        <div className="flex items-center header-bold">
          <ul>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Home</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="/games">Games</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="/apps">apps</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Blog</a></li>
            <li className="inline-block px-3 transition-all hover:text-secondary"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
