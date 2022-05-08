import * as React from "react"
import { Link } from "gatsby"
import Social from './social';


const Footer = () => {

  return (
    <footer className="bg-dark py-8">
      <div className="flex justify-between max-w-6xl m-auto">
        <div className="text-white">
          <li className="inline-block px-3 transition-all hover:text-secondary border-r border-white"><a href="/privacy">Privacy Policy</a></li>
          <li className="inline-block px-3 transition-all hover:text-secondary"><a href="/contact">Contact</a></li>
        </div>
        <Social />
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4304639527456549"
     crossorigin="anonymous"></script>
    </footer>
  )
}

export default Footer
