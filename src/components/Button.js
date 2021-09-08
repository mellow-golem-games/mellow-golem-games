import * as React from "react"
import { Link } from "gatsby"



const Button = ({text, link, style = "normal", color = "dark"}) => {

  const smallClasses = "text-base py-2 px-4"
  const normalClasses = "text-lg py-3 px-6"
  const buttonClasses = style === "small" ? smallClasses : normalClasses;

  const darkBorderClasses = "border-dark text-dark";
  const whiteBorderClasses = "border-white text-white ";
  const borderClasses = color === "white" ? whiteBorderClasses : darkBorderClasses;

  return (
    <Link to={link} itemProp="url" className="">
      <div className={`Button relative border inline-block ${buttonClasses} ${borderClasses}`}>
          <span className="relative z-10">{ text }</span>
      </div>
    </Link>
  )
}

export default Button
