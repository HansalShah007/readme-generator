import React, { useState } from 'react'
import './Features.css'
import Add from '../Add/Add'

const Features = () => {
    return (
        <div>
            <Add heading={"Features"} placeholder={"Add a new feature"} width={"95%"}/>            
        </div>
    )
}

export default Features