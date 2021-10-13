import * as React from "react"
import { Link } from "gatsby"


const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="text-white fixed px-4 py-4 z-10 w-full bg-dark">
      <div className="max-w-6xl m-auto flex justify-between">
        <div className="logo pl-12">
          <a href="/"><img src="/images/title.png" width="220px" /></a>
        </div>
        <div className="flex items-center header-bold">
          <svg className="md:hidden" onClick={() => setOpen(true)} width="28px" height="28px" aria-hidden="true" role="img"viewBox="0 0 448 512" ><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" class=""></path></svg>
          <ul
            className="md:px-0 text-xl md:text-lg text-center md:text-left bg-dark md:bg-transparent absolute md:static transition-all"
            style={{top: 0, right: open ? 0 : "-400px"}}
          >
            <li className="md:inline-block px-8 md:px-3 transition-all hover:text-secondary py-3 md:py-0">
              <Link to={"/"} itemProp="url" className="">
                Home
              </Link>
            </li>
            <li className="md:inline-block px-8 md:px-3 transition-all hover:text-secondary py-3 md:py-0">
              <Link to={"/games"} itemProp="url" className="">
                Games
              </Link>
            </li>
            <li className="md:inline-block px-8 md:px-3 transition-all hover:text-secondary py-3 md:py-0">
              <Link to={"/apps"} itemProp="url" className="">
                Apps
              </Link>
            </li>
            <li className="md:inline-block px-8 md:px-3 transition-all hover:text-secondary py-3 md:py-0">
              <Link to={"/blog"} itemProp="url" className="">
                Blog
              </Link>
            </li>
            <li className="md:inline-block px-8 md:px-3 transition-all hover:text-secondary py-3 md:py-0">
              <Link to={"/contact"} itemProp="url" className="">
                Contact
              </Link>
            </li>
            <li className="md:inline-block px-8 md:px-3 transition-all bg-primary py-3 md:py-0">
              <p className="md:hidden" onClick={() => setOpen(false)}>Close</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
