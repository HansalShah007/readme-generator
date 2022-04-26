import React from 'react'
import TextareaInput from '../TextareaInput/TextareaInput'
import './GeneralInfo.css'

const GeneralInfo = () => {
    return (
        <div id="generalInfo">
            <h4 className="subheading">General Information</h4>
            <TextareaInput input={"1"} placeholder={"General info about your project"} heading={"General Information"}/>
            <TextareaInput input={"2"} placeholder={"What problem does it solve?"} />
            <TextareaInput input={"3"} placeholder={"Purpose of your project"} />
        </div>
    )
}

export default GeneralInfo
