import React from 'react'
import "./Project.css"
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from "@cloudinary/url-gen"
import Feature from './Feature'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <motion.div className={`project ${thumbnail ? "has-thumbnail" : "no-thumbnail"}`}
                    id={`project${index}`} 
                    onClick={thumbnail ? open : undefined} 
                    whileHover={animationComplete && thumbnail ? {scale:1.1} : {}}>
            <div className="project__content">
                {thumbnail && (
                    <div className="project__image-container">
                        <AdvancedImage 
                            className="project__image"
                            cldImg={cld.image(thumbnail)}
                        />
                    </div>
                )}
                <div className={`project__details ${thumbnail ? "has-thumbnail" : "no-thumbnail"}`}>
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
                        {thumbnail ? 
                            tools.map((tool)=> (
                                <Feature iconName={tool.icon} iconLabel={tool.name}/>
                            ))
                        :
                            <motion.button whileHover={{scale:1.1}} class="project__git-button">
                                <FontAwesomeIcon className="project__git-button-icon" icon={faGithub} />
                                <span className="project__git-button-text">View on GitHub</span>
                            </motion.button>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Project