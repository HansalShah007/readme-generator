import React from "react"
import TextareaInput from "../TextareaInput/TextareaInput"

const ProjectStatus = () => {
    return (
        <div>
            <h4 className="subheading">Project Status</h4>
            <TextareaInput type={"No Bullets"}  heading={"Project Status"}  placeholder={"In Progress / Completed / No longer working on it. Give reason."}/>
        </div>
    )
}

export default ProjectStatus