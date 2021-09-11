import * as React from "react"
import { Link } from "gatsby"


const ProjectPage = ({project}) => {
  return (
    <div>
      <div
        className="py-24 subHeader text-white text-center bg-cover bg-center"
        style={{backgroundImage: `url("${project.imageUrl}")`, height: "50vh"}}
      >
      </div>


      <div className="text-center py-28 max-w-5xl m-auto px-4 md:px-0">
        <h2 className="text-5xl pb-8">{project.title}</h2>
        <p className="text-xl pb-8 border-b-2 border-secondary">{ project.description }</p>

        {project.images.length > 0
          ? <div className="pt-28 pb-8 border-b-2 border-secondary">
              <div className="grid grid-cols-1 sm:grid-cols-3 text-white">
                {
                  project.images.map(image => {
                    return (
                      <div className="px-2">
                        <img src={image} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
         : null
        }

        <div className="pt-28">
          <div className="flex pb-4">
            <h3 className="text-xl pt-1">{project.urlText}</h3>
            <div className="pl-2 pt-2">
              <a href={ project.url }>{project.url}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
