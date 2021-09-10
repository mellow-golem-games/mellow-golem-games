import * as React from "react"



const PostCard = ({ details }) => {

  return (
    <div className="Post-Card transition-all duration-500 mb-12" style={{boxShadow: "0 0 19px 2px rgba(0,0,0,.11)"}}>
      <a href="#">
        <div className="bg-cover bg-center" style={{height: "200px", backgroundImage: "url('/images/mountain.jpg')"}}>
        </div>
        <div className="p-4">
          <p className="text-sm text-primary">June 9, 2021</p>
          <h2 className="text-2xl pt-2 pb-4">Title of the Post Here</h2>
          <p>A brief description of the post goes here</p>
        </div>
      </a>
    </div>
  )
}

export default PostCard
