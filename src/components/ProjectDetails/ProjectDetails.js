import React from 'react'
import SectionTitles from '../SectionTitles/SectionTitles'
import HeadingInput from '../HeadingInput/HeadingInput'
import TextareaInput from '../TextareaInput/TextareaInput'

import './ProjectDetails.css'

const ProjectDetails = () => {

    return (
        <div id="projDetails">
            <SectionTitles />
            <HeadingInput input={"Project Name"} />
            <TextareaInput input={"Project Details"} type={"No Bullets"} placeholder={"Outline / Brief description of the Project"}/>
        </div>
    )
}

export default ProjectDetails