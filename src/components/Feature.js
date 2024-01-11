import React from "react"
import { FaDraftingCompass, FaJava, FaCode, FaNodeJs, FaReact, FaGoogle} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr"
import { SiGooglecloud, SiKotlin } from "react-icons/si"
import "./Feature.css";


const Feature = ({featName}) => {
    let Icon;
    switch(featName) {
        case "Android Studio": Icon = FaDraftingCompass; break;
        case "Firebase": Icon = IoLogoFirebase; break;
        case "Java Swing": Icon = FaJava; break;
        case "Node.js": Icon = FaNodeJs; break;
        case "React": Icon = FaReact; break;
        case "Google Calendar API": Icon = FaGoogle; break;
        case "MySQL": Icon = GrMysql; break;
        case "GCP": Icon = SiGooglecloud; break;
        case "Kotlin": Icon = SiKotlin; break;
        default: Icon = FaCode;

    }

    return <div className="feature"> 
                <Icon className="feature__icon"/> 
                <span className="feature__label">
                    {featName}
                </span>
            </div>;
}

export default Feature;