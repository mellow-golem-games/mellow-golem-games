import * as React from "react"
import Button from "./Button"



const Card = ({ details }) => {

  return (
    <div className="Card relative overflow-hidden my-4">
      <div
        style={{maxHeight: "220px", overflow: "hidden"}}
      >
        <img src={details.imageUrl} width="100%"/>
      </div>
      <div
        className="Card__details flex bg-primary py-2 px-2 text-white justify-between items-center transition-all"
        style={{position: "absolute", bottom: "-75px", width: "100%"}}
      >
        <h3>{details.name}</h3>
        <div className="ml-2">
          <Button text="Explore" link={details.link} style="small"/>
        </div>
      </div>
    </div>
  )
}

export default Card
