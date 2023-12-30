import React from "react";
import Feature from "./Feature"
import "./Modal.css"
import {IoCloseCircl, IoCloseCircleOutline} from "react-icons/io5"
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react'
import {motion} from "framer-motion"

// 38:09

const Modal = ({data, close}) => {
    const { id, thumbnail, title, type, tools, screenshots, githubUrl, description } = data;
    const modalVariants = { open: {opacity:1, transition: {staggerChildren: 0.5, delayChildren: 0.2}}, closed: { opacity: 0} };
    const cld = new Cloudinary({ cloud: { cloudName: 'dv5ot0eg0' }}); 
    return (
        <motion.div className="modal" onClick={(e) => e.stopPropagation()} variants={modalVariants}> 
            <AdvancedImage 
                className="modal__image"
                cldImg={cld.image(thumbnail)}
            />
            <div className="modal__info">
                <div className="modal__row">
                    <span className="modal__title">{title}</span>
                </div>
                <div className="modal__row">
                    <span className="modal__type">{type}</span>
                </div>
                <div className="modal__row">
                    {tools.map((tool)=> (
                        <Feature iconName={tool.icon} iconLabel={tool.name}/>
                    ))}
                </div>
                <div className="modal__description-wrapper">
                    <p className="modal__description">{description}</p>
                </div>
                <button className="modal__close-wrapper" onClick={close} >
                    <IoCloseCircleOutline className="modal__close-icon"/>
                </button>
            </div>
        </motion.div>
    )
};

export default Modal;