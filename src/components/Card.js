import React, {useState} from "react"
import Project from "./Project"
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Card = ({ data }) => {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <>
            <Project data={data} open={openModal}/>
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