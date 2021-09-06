import * as React from "react"
import { Link } from "gatsby"



const Button = ({text, link}) => {

  return (
    <Link to={link} itemProp="url" className="">
      <div className="Button relative text-dark text-lg py-3 px-6 border border-dark inline-block">
          <span className="relative z-10">{ text }</span>
      </div>
    </Link>
  )
}

export default Button
