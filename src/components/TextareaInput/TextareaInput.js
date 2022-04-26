import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './TextareaInput.css'

const TextareaInput = (props) => {
    const [content, setContent] = useState("");
    const [markContent, setMarkContent] = useState("");

    const handleContent = (event) => {
        setContent(event.target.value)
        if (props.type == "No Bullets") {
            setMarkContent(event.target.value + "\n")
        }
        else {
            setMarkContent("* " + event.target.value + "\n")
        }
    }

    const displayContent = content.length > 0

    let sectionHeading = ""
    if (props.hasOwnProperty('heading')) {
        sectionHeading = "## " + props.heading + "\n---"
    }
    const displayHeading = sectionHeading.length > 0

    return (
        <div id="textareaRender">
            <div className="inputs">
                <div className="input-group">
                    <span className="input-group-text">{props.input}</span>
                    <textarea className="form-control" value={content} placeholder={props.placeholder} aria-label="With textarea" onChange={handleContent}></textarea>
                </div>
            </div>
            <div className="outputs">
                {displayContent && displayHeading && <ReactMarkdown children={sectionHeading} />}
                {displayContent && <ReactMarkdown children={markContent} />}
            </div>
        </div>
    )
}

export default TextareaInput