import React from "react";
import Feature from "./Feature"
import "./Modal.css"
import {IoCloseCircl, IoCloseCircleOutline} from "react-icons/io5"
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from '@cloudinary/react'
import {motion} from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Modal = ({data, close}) => {
    const { id, thumbnail, title, type, tools, screenshots, githubUrl, description } = data;
    const modalVariants = {
        open: {
            opacity:1, 
            transition: {delayChildren: 0.2}
        }, 
        closed: { opacity: 0} 
    };
    const imageVariants = {
        open: { opacity: 1, y: "0vh" },
        closed: {opacity: 0, y: "-10vh" }
    }
    const modalInfoVariants = {
        open: { opacity: 1, transition: {staggerChildren: 0.2 }},
        closed: { opacity: 0 }
    }
    const modalRowVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "10%"}
    }
    // const cld = new Cloudinary({ cloud: { cloudName: 'dv5ot0eg0' }}); 
    return (
        <motion.div 
            className="modal" 
            onClick={(e) => e.stopPropagation()} 
            variants={modalVariants}
        > 
            <Swiper
                className="swiper"
                modules={[Navigation, Keyboard, Scrollbar]}
                navigation
                scrollbar={{draggable: true}}
                effect
                speed={800}
                slidesPerView={1}
                loop
                keyboard={{enabled: true}}
            >{
                screenshots.map((image) => (
                    <SwiperSlide className="swiperslide">
                        <motion.img variants={imageVariants} className="swiperimage" src={`https://res.cloudinary.com/dv5ot0eg0/image/upload/${image}`} alt={`Slide 1`} />
                    </SwiperSlide>
                ))
            }</Swiper> 
            <motion.div className="modal__info" variants={modalInfoVariants}>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    <span className="modal__title">{title}</span>
                </motion.div>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    <span className="modal__type">{type}</span>
                </motion.div>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    {tools.map((tool)=> (
                        <Feature iconName={tool.icon} iconLabel={tool.name}/>
                    ))}
                </motion.div>
                <motion.div className="modal__description-wrapper" variants={modalRowVariants}>
                    <p className="modal__description">{description}</p>
                </motion.div>
                <motion.button className="modal__close-wrapper" onClick={close} whileHover={{scale:1.2}}>
                    <IoCloseCircleOutline className="modal__close-icon"/>
                </motion.button>
            </motion.div>
        </motion.div>
    )
};

export default Modal;