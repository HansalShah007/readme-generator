import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from '../Image/Image'
import './Screenshots.css'

function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

const Screenshots = () => {

    const [imageCount, setImageCount] = useState(1)
    const [images, setImages] = useState(Array(imageCount).fill(""))

    const addSS = () => {
        if (imageCount < 4) {
            let newImages = []
            for (let i = 0; i < imageCount; i++) {
                newImages.push(images[i])
            }
            newImages.push("")
            setImages(newImages)
            setImageCount(imageCount + 1)
        }
    }

    const delSS = () => {
        if (imageCount > 0) {
            let newImages = []
            for (let i = 0; i < imageCount - 1; i++) {
                newImages.push(images[i])
            }
            setImages(newImages)
            setImageCount(imageCount - 1)
        }
    }

    const displayImageFields = images.length > 0
    let temp_count = -1

    const handleUpload = (event) => {
        let newImages = []
        for (let i = 0; i < imageCount; i++) {
            if (i != event.target.name) {
                newImages.push(images[i])
            }
            else {
                newImages.push(event.target.value)
            }
        }
        setImages(newImages)
    }

    const imagesToDisplay = images.filter((img) => {
        return isImage(img)
    })

    const displayImages = imagesToDisplay.length > 0
    const heading = "## Screenshots\n---"

    return (
        <div id="screenshots">
            <div className="inputs">
                <h4 className="subheading">Screenshots</h4>
                {
                    displayImageFields &&
                    images.map((img) => {
                        temp_count++
                        let temp_text = "Screenshot " + temp_count
                        return <Image key={"screenshots"+temp_count} id={temp_count} altText={temp_text} mouseOverText={temp_text} width="95%" handleUpload={handleUpload} pholder={"Enter Image URL"}/>
                    })
                }
                <button type="button" className="btn btn-light addbutton" onClick={addSS}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg></button>
                <button type="button" className="btn btn-dark deletebutton" onClick={delSS}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg></button>
            </div>
            <div className="outputs">
                {
                    displayImages && <ReactMarkdown children={heading} />
                }
                {
                    displayImages &&
                    imagesToDisplay.map((imgPath) => {
                        const temp_image = '![](' + imgPath + ' "")'
                        return <ReactMarkdown children={temp_image} />
                    })
                }
            </div>
        </div>
    )
}

export default Screenshots