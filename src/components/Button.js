import * as React from "react"
import { Link } from "gatsby"



const Button = ({text, link, style = "normal"}) => {

  const smallClasses = "text-base py-2 px-4"
  const normalClasses = "text-lg py-3 px-6"
  const buttonClasses = style === "small" ? smallClasses : normalClasses;

  return (
    <Link to={link} itemProp="url" className="">
      <div className={`Button relative text-dark  border border-dark inline-block ${buttonClasses}`}>
          <span className="relative z-10">{ text }</span>
      </div>
    </Link>
  )
}

export default Button
