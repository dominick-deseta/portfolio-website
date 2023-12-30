import React from "react"
import * as FontAwesome from "react-icons/fa";
import "./Feature.css";

const Feature = ({iconName, iconLabel}) => {
    const Icon = FontAwesome[iconName];

    return <div className="feature"> 
                <Icon className="feature__icon"/> 
                <span className="feature__label">
                    {iconLabel}
                </span>
            </div>;
}

export default Feature;