import React from 'react'
import './GenerateReadme.css'

const GenerateReadme = () => {

    const handleClick = () => {
        let outputDivisions = document.getElementsByClassName('outputs')
        let outputs = []
        for (let i = 1; i < outputDivisions.length; i++) {
            outputs.push(outputDivisions[i].innerHTML)
        }

        const element = document.createElement("a");
        const file = new Blob(outputs, { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "README.md";
        element.click();
    }
    return (
        <div className="generate-button">
            <div className="line"></div>
            {/* <button onClick={handleClick}>Generate README.md!</button> */}
            <button onClick={handleClick} className="button-54" role="button">Generate README.md!</button>

        </div>
    )

}

export default GenerateReadme