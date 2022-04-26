import React from 'react'
import './TextInput.css'

const TextInput = (props) => {

    const styleObj = {
        border: "none",
        borderBottom: "1px solid black",
        width: props.width,
        margin: "20px",
        marginLeft: "0px"
    }

    return (
        <div style={styleObj} className="input-group input-group-sm mb-3">
            <input type="text" className="form-control textInpField" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name={props.id} value={props.value} placeholder={props.placeholder} onChange={props.changeHandler} />
        </div>
    )
}

export default TextInput