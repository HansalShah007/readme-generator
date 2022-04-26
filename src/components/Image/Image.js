import React from 'react'
import './Image.css'

const Image = (props) => {

    const styleObj = {
        width: props.width,
        border: "none",
        borderBottom: "1px solid black",
        margin: "20px",
        marginLeft: "0px"
    }

    return (
        <div  className="mb-3 image-container">
            <input style={styleObj} className="form-control img-input" type="url" name={props.id} accept="image/*" onChange={props.handleUpload} placeholder={props.pholder} />
        </div>

    )
}

export default Image