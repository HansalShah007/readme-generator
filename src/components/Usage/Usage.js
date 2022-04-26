import React from 'react'
import TextareaInput from '../TextareaInput/TextareaInput'
import Add2 from '../Add/Add2'


const Usage = () => {
    return (
        <div className='usage'>
            <div>
                <h4 className='subheading'>Usage</h4>
                <ul>
                    <li>
                        <h5 className='sub-head'>Usage Info</h5>
                    </li>
                    <TextareaInput type={"No Bullets"} placeholder={"How can one use it? Provide various use cases."} heading={"Usage"} />
                    <li>
                        <h5 className='sub-head'>Add Code Examples</h5>
                    </li>
                    <Add2 placeholder={"Description"} placeholder_code={"Add code"} subheading={"Code Examples"} />
                </ul>
            </div>
        </div>
    )
}

export default Usage