import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import TextInput from '../TextInput/TextInput'
import './Contact.css'

const Contact = () => {
    const [links, setLinks] = useState(Array(4).fill(""))

    const innerTag = [
        '<img style="width:10%" target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />',
        '<img style="width:10%" target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />',
        '<svg style="width:10%" target="_blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" /></svg>',
        '<img style="width:10%" target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" />'
    ]

    const linkChange = (event) => {
        let newLinks = []
        for (let i = 0; i < 4; i++) {
            if (i + 1 == event.target.name) {
                newLinks.push(event.target.value)
            }
            else {
                newLinks.push(links[i])
            }
        }
        setLinks(newLinks)
    }

    const inputLinks = links.filter((link) => {
        return link.length > 0
    })

    const hasLinks = inputLinks.length > 0

    const heading = "## Contact\n---"

    var mdt = ""

    return (
        <div className="contact">
            <div className='inputs'>
                <div>
                    <h4 className="subheading">Contact</h4>
                </div>
                <div >
                    <div className="con-icon">
                        <img className='con-img' width={"40"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                        <TextInput width={"90%"} id={1} value={links[0]} changeHandler={linkChange} placeholder={"Add your LinkedIn Profile Link"} />
                    </div>
                    <div className="con-icon">
                        <img width={"40"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        <TextInput width={"90%"} id={2} value={links[1]} changeHandler={linkChange} placeholder={"Add your Github Profile Link"} />
                    </div>
                    <div className="con-icon">
                        <svg width={"40"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" /></svg>
                        <TextInput width={"90%"} id={3} value={links[2]} changeHandler={linkChange} placeholder={"Add your Reddit Profile Link"} />
                    </div>
                    <div className="con-icon">
                        <img width={"40"} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"/>
                        <TextInput width={"90%"} id={4} value={links[3]} changeHandler={linkChange} placeholder={"Add your Facebook Profile Link"} />
                    </div>
                </div>
            </div>
            <div className="outputs">
                {hasLinks && <ReactMarkdown children={heading} />}
                {hasLinks &&
                    links.map((link) => {
                        if (link.length > 0) {
                            const ind = links.indexOf(link)
                            mdt = mdt + '<span style="margin-right:30px"></span>' + '<a href="' + link + '">' + innerTag[ind] + '</a>'
                        }
                    })
                    && 
                    <ReactMarkdown children={mdt} rehypePlugins={[rehypeRaw]} escapeHtml={false} />
                }
            </div>
        </div>
    )
}

export default Contact