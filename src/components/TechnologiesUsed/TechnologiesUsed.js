import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Checkbox from '../Checkbox/Checkbox'
import TextInput from '../TextInput/TextInput'
import './TechnologiesUsed.css'

const listOfTech = [
    {
        "id": 0,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        "technology": "HTML"
    },
    {
        "id": 1,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        "technology": "CSS"
    },
    {
        "id": 2,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "technology": "JavaScript"
    },
    {
        "id": 3,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "technology": "React"
    },
    {
        "id": 4,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        "technology": "Angular"
    },
    {
        "id": 5,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        "technology": "Django"
    },
    {
        "id": 6,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        "technology": "Flask"
    },
    {
        "id": 7,
        "svgURL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "technology": "NodeJS"
    }
]

const TechnologiesUsed = () => {

    const [otherCount, setOtherCount] = useState(0)
    const [values, setValues] = useState(Array(otherCount).fill(""))

    const [checks, setChecks] = useState(Array(listOfTech.length).fill(false))

    const handleTechClick = (event) => {
        let updatedChecks = []
        if (event.target.checked) {
            for (let i = 0; i < checks.length; i++) {
                if (i != event.target.name) {
                    updatedChecks.push(checks[i])
                }
                else {
                    updatedChecks.push(true)
                }
            }
            setChecks(updatedChecks)
        }
        else {
            for (let i = 0; i < checks.length; i++) {
                if (i != event.target.name) {
                    updatedChecks.push(checks[i])
                }
                else {
                    updatedChecks.push(false)
                }
            }
            setChecks(updatedChecks)
        }
    }

    const techToDisplay = listOfTech.filter((tech) => {
        return checks[tech.id]
    })

    const displayTechList = techToDisplay.length > 0
    const heading = "## Technologies Used\n---"

    const addOthers = () => {
        let newValues = []
        for (let i = 0; i < otherCount; i++) {
            newValues.push(values[i])
        }
        newValues.push("")
        setValues(newValues)
        setOtherCount(otherCount + 1)
    }

    const deleteOthers = () => {
        if (otherCount > 0) {
            let newValues = []
            for (let i = 0; i < otherCount - 1; i++) {
                newValues.push(values[i])
            }
            setValues(newValues)
            setOtherCount(otherCount - 1)
        }

    }

    const displayOthers = otherCount > 0
    let temp_count = -1

    const handleChange = (event) => {
        let updatedValues = []
        for (let i = 0; i < values.length; i++) {
            if (i != event.target.name) {
                updatedValues.push(values[i])
            }
            else {
                updatedValues.push(event.target.value)
            }
        }
        setValues(updatedValues)
    }

    const valuesToDisplay = values.filter((val) => {
        return val.length > 0
    })

    const displayValueList = valuesToDisplay.length > 0

    return (
        <div id="techUsed">
            <div className='inputs technologyList'>
                <h4 className="subheading">Technologies Used</h4>
                {
                    listOfTech.map((tech) => {
                        return <Checkbox key={tech.id} id={tech.id} svgURL={tech.svgURL} technology={tech.technology} clickHandler={handleTechClick} check={checks[tech.id]} />
                    })
                }
                {
                    displayOthers &&
                    values.map((val) => {
                        temp_count = temp_count + 1
                        return <TextInput id={temp_count} value={val} placeholder={"Other Technology"} changeHandler={handleChange} width={"40%"}/>
                    })
                }
                <button type="button" className="btn btn-light addbutton" onClick={addOthers}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg></button>
                <button type="button" className="btn btn-dark deletebutton" onClick={deleteOthers}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg></button>
            </div>
            <div className="outputs">
                {(displayTechList || displayValueList) && <ReactMarkdown children={heading} />}
                {
                    displayTechList && techToDisplay.map((tech) => {
                        const listElement = "* " + tech.technology + "\n"
                        return <ReactMarkdown children={listElement} />
                    })
                }
                {
                    displayValueList && valuesToDisplay.map((val) => {
                        const listElement = "* " + val + "\n"
                        return <ReactMarkdown children={listElement} />
                    })
                }
            </div>
        </div>
    )
}

export default TechnologiesUsed
