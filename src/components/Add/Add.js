import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import TextInput from '../TextInput/TextInput'
import './Add.css'

const Add = (props) => {

    const [itemCount, setItemCount] = useState(1)
    const [items, setItems] = useState(Array(itemCount).fill(""))


    const addItems = () => {
        let newItems = []
        for (let i = 0; i < itemCount; i++) {
            newItems.push(items[i])
        }
        newItems.push("")
        setItems(newItems)
        setItemCount(itemCount + 1)
    }

    const deleteItems = () => {
        if (itemCount > 0) {
            let newItems = []
            for (let i = 0; i < itemCount - 1; i++) {
                newItems.push(items[i])
            }
            setItems(newItems)
            setItemCount(itemCount - 1)
        }
    }

    const displayItemFields = items.length > 0
    let temp_count = -1

    const handleChange = (event) => {
        let newItems = []
        for (let i = 0; i < itemCount; i++) {
            if (i != event.target.name) {
                newItems.push(items[i])
            }
            else {
                newItems.push(event.target.value)
            }
        }
        setItems(newItems)
    }

    const itemsToDisplay = items.filter((item) => {
        return item.length > 0
    })

    const displayItems = itemsToDisplay.length > 0

    let heading = `## ${props.heading}\n---`
    let hasHeading = true
    if(props.heading == undefined){
        hasHeading = false
        heading = ``
    }

    let subheading = `##### ${props.subheading}\n`
    let hasSubHeading = true
    if(props.subheading == undefined){
        hasSubHeading = false
        subheading = ``
    }

    return (
        <div id="items">
            <div className="inputs">
                {hasHeading && <h4 className="subheading">{props.heading}</h4>}
                {
                    displayItemFields &&
                    items.map((item) => {
                        temp_count++
                        return <TextInput key={"add"+temp_count} id={temp_count} value={item} placeholder={props.placeholder} changeHandler={handleChange} width={props.width}/>
                    })
                }
                <button type="button" className="btn btn-light addbutton" onClick={addItems}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg></button>
                <button type="button" className="btn btn-dark deletebutton" onClick={deleteItems}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg></button>
            </div>
            <div className="outputs">
                {hasHeading && displayItems && <ReactMarkdown children={heading} />}
                {hasSubHeading && displayItems && <ReactMarkdown children={subheading} />}
                {
                    displayItems &&
                    itemsToDisplay.map((item) => {
                        const tempitem = "* " + item
                        return <ReactMarkdown children={tempitem} />
                    })
                }
            </div>
        </div>
    )
}

export default Add