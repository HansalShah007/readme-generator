import React from 'react'
import TextareaInput from '../TextareaInput/TextareaInput'

const Acknowledgement = () => {
    return (
        <div className="ack">
                <h4 className="subheading">Acknowledgement</h4>
                <TextareaInput input={"1"} placeholder={"This project was inspired by..."} heading={"Acknowledgement"} />
                <TextareaInput input={"2"} placeholder={"This project was based on the tutorial: "} />
                <TextareaInput input={"3"} placeholder={"Many thanks to..."} />
        </div>
    )
}

export default Acknowledgement
