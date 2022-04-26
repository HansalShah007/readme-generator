import React, {useState} from 'react'
import './Checkbox.css'

const Checkbox = (props) => {
    
    return (
        <div className="form-check checkbox">
            <input className="form-check-input" type="checkbox" value={props.technology} name={props.id} onChange={props.clickHandler} checked={props.check}/>
            <label className="form-check-label">
                <img src={props.svgURL} width={"40"} height={"40"} className="logo"/>
                <span className="tech">{props.technology}</span>
            </label>
        </div>
    )
}

export default Checkbox