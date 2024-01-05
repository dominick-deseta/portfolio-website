import React from 'react'
import "./Project.css"
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from "@cloudinary/url-gen"
import Feature from './Feature'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const Project = ({ data, open, index }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const { id, thumbnail, title, type, tools, screenshots, githubUrl, description } = data
    const cld = new Cloudinary({ cloud: { cloudName: 'dv5ot0eg0' }}); 
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        console.log(`#project${index}`)
        gsap.fromTo(`#project${index}`, 
            { opacity: 0, y: "8vh" }, 
            { opacity: 1, 
                y: 0, 
                duration: 1,
                delay: 1+0.2*index,
                scrollTrigger: {
                    trigger: ".projects__header",
                    start: "top 80%", 
                },
                onComplete: () => setAnimationComplete(true)
        });
      }, []);
    return (
        <motion.div className="project" id={`project${index}`} onClick={open} whileHover={animationComplete ? {scale:1.1} : {}}>
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