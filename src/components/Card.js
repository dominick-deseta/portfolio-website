import React, {useState} from "react"
import Project from "./Project"
import Overlay from "./Overlay";

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
            {open && (
            <Overlay close={closeModal}>

            </Overlay>
            )}
        </>
    )
}

export default Card;