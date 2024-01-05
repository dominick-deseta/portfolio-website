import React, {Fragment, useState} from "react"
import Project from "./Project"
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import {useRef, useEffect} from 'react'
import { gsap } from "gsap"
import "./Card.css"

const Card = ({ data, index }) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <>
            <Project index={index} data={data} open={openModal}/>
            <AnimatePresence>
                {open && (
                <Overlay close={closeModal}> {
                    <Modal data={data} close={closeModal}/>
                }</Overlay>
                )}
            </AnimatePresence>
        </>
    )
}

export default Card;