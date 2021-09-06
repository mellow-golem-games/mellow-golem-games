import * as React from "react"
import { Link } from "gatsby"


const Footer = () => {

  return (
    <footer className="bg-dark py-8">
      <div className="flex justify-between max-w-6xl m-auto">
        <div className="text-white">
          <li className="inline-block px-3 transition-all hover:text-secondary border-r border-white"><a href="#">Privacy Policy</a></li>
          <li className="inline-block px-3 transition-all hover:text-secondary"><a href="#">Contact</a></li>
        </div>
        <div>
          <p>Social</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
