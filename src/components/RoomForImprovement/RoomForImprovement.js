import React from "react"
import TextareaInput from "../TextareaInput/TextareaInput"
import './RoomForImprovement.css'

const RoomForImprovement = () => {
    return (
        <div>
            <div className="rfi">
            <h4 className="subheading">Room For Improvement</h4>
            <ul>
            <li><h5 className="sub-heading">Improvements</h5></li>
            <TextareaInput input={"1"} placeholder={"Improvement 1: "} heading={"Improvements"}/>
            <TextareaInput input={"2"} placeholder={"Improvement 2: "} />
            <TextareaInput input={"3"} placeholder={"Improvement 3: "} />

            <li><h5 className="sub-heading feat-sub">Features that can be added</h5></li>
            <TextareaInput input={"1"} placeholder={"Feature to be added 1: "} heading={"Features that can be added"}/>
            <TextareaInput input={"2"} placeholder={"Feature to be added 2: "} />
            <TextareaInput input={"3"} placeholder={"Feature to be added 3: "} />
            </ul>
        </div>
        </div>
    )
}

export default RoomForImprovement