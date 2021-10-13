import * as React from "react"
import { Link } from "gatsby"



const PostCard = ({ post }) => {
  return (
    <div className="Post-Card transition-all duration-500 mb-12" style={{boxShadow: "0 0 19px 2px rgba(0,0,0,.11)"}}>
      <Link to={post.fields.slug} itemProp="url" className="">
        <div className="bg-cover bg-center" style={{height: "200px", backgroundImage: `url('/images/${post.frontmatter.thumbnail}')`}}>
        </div>
        <div className="p-4">
          <p className="text-sm text-primary">{ post.frontmatter.date }</p>
          <h2 className="text-2xl pt-2 pb-4">{ post.frontmatter.title} </h2>
          <p>{ post.frontmatter.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
