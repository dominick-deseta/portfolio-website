import React from 'react'
import "./Project.css"
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from "@cloudinary/url-gen"
import Feature from './Feature'
import {motion} from "framer-motion"

const Project = ({ data, open }) => {
    const { id, thumbnail, title, type, tools, screenshots, githubUrl, description } = data
    const cld = new Cloudinary({ cloud: { cloudName: 'dv5ot0eg0' }}); 
    return (
        <motion.div className="project" onClick={open} whileHover={{scale:1.1}}>
            <div className="project__content">
                <div className="project__image-container">
                    {/* <img className="project__image" src={cld.image(thumbnail)} alt="uhhh"/> */}
                    <AdvancedImage 
                        className="project__image"
                        cldImg={cld.image(thumbnail)}
                    />
                </div>
                <div className="project__details">
                    <div className="project__row">
                        <span className="project__title">
                            {title}
                        </span>
                    </div>
                    <div className="project__row">
                        <span className="project__type">
                            {type}
                        </span>
                    </div>
                    <div className="project__row">
                        {tools.map((tool)=> (
                            <Feature iconName={tool.icon} iconLabel={tool.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Project