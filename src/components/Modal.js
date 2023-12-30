import React from "react";
import Feature from "./Feature"
import "./Modal.css"
import {IoCloseCircl} from "react-icons/io5"

// 38:09

const Modal = ({data, close}) => {
    const { id, thumbnail, title, type, tools, screenshots, githubUrl, description } = data;
    return (
        <div> 
            <img className="modal__image" alt="project expanded image" src={thumbnail}/>
            <div className="modal__info">
                <div className="modal__row">
                    <span className="modal__title">{title}</span>
                </div>
                <div className="modal__row">
                    <span className="modal__type">{type}</span>
                </div>
                <div className="modal__row">
                    <span className="modal__tools">{tools}</span>
                </div>
            </div>
        </div>
    )
};

export default Modal;