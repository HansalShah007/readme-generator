import React from 'react'
import './Setup.css'
import TextareaInput from '../TextareaInput/TextareaInput'
import Add from '../Add/Add'

const Setup = () => {
    return (
        <div className='setup'>
            <div>
                <h4 className='subheading'>Setup</h4>
                <ul>
                    <li>
                        <h5 className='sub-head'>Setup Info</h5>
                    </li>
                    <TextareaInput type={"No Bullets"} placeholder={"What are the project requirements/dependencies? Where are they listed?"} heading={"Setup"} />
                    <li>
                        <h5 className='sub-head'>Steps</h5>
                        <Add subheading={"Steps"} placeholder={"Steps for how to install / get started with project."} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Setup