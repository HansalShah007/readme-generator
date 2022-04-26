import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './HeadingInput.css'

const HeadingInput = (props) => {
    const [heading, setHeading] = useState("");
    const [markHeading, setMarkHeading] = useState("");

    const handleHeading = (event) => {
        setHeading(event.target.value)
        setMarkHeading("# "+ event.target.value + "\n---")
    }

    const displayHeading = heading.length > 0

    return (
        <div id="headingRender">
            <div className="inputs">
                <div className="input-group">
                    <span className="input-group-text">{props.input}</span>
                    <textarea className="form-control" value={heading} aria-label="With textarea" onChange={handleHeading}></textarea>
                </div>
            </div>
            <div className="outputs">
                {displayHeading && <ReactMarkdown children={markHeading}/>}
            </div>
        </div>
    )
}

export default HeadingInput