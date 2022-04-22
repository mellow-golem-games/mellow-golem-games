import * as React from "react"
import { Link } from "gatsby"


const Hero = () => {

  return (
    <div className="h-screen bg-center bg-cover flex justify-center" style={{backgroundImage: "url('/images/mountain.jpg')"}}>
      <div className="text-white text-center px-3 text-3xl py-16 max-w-3xl m-auto">
        <h2>Indie Game Devs and RPG Lovers</h2>
      </div>
    </div>
  )
}

export default Hero
