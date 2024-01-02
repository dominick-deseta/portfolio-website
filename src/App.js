import './index.css';
import './App.css';
import Card from "./components/Card"
import { properties } from "./constants/data"
import {Cloudinary} from "@cloudinary/url-gen";
import SplitType from 'split-type';
import { gsap } from "gsap";
import { useEffect } from 'react';
import * as FontAwesome from "react-icons/fa";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function App() {
  const Icon = FontAwesome["FaBed"];

  useEffect(() => {
    gsap.registerPlugin(SplitType);

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');

    const splitFirst = new SplitType(firstName, {type: "chars"});
    const splitLast = new SplitType(lastName, {type: "chars"});

    gsap.to(splitFirst.chars, {
      delay: 0.3,
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      ease: "power2.out"
    });

    gsap.to(splitLast.chars, {
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      delay: 0.8, 
      ease: "power2.out"
    });

    gsap.to('.button', {
      scale: 1,
      duration: 1,
      delay: 1.5,
      ease: "power2.out",
      stagger: 0.1
    });

    gsap.to('.button', {
      width: '150px',
      duration: 1,
      delay: 3,
      ease: "power2.out",
      stagger: 0.5
    });
    
    gsap.to('.button-text', {
      x: 15,
      opacity: 1,
      duration: 1,
      delay: 3,
      ease: "power2.out",
      stagger: 0.5
    });

    gsap.to('.button-icon', {
      x: -45,
      duration: 1,
      delay: 3,
      ease: "power2.out",
      stagger: 0.5
    });

  }, []);

  return (
    
    <div className="App">
      <header>
        <div className="name-container">
          <h1 id="first-name">Dominick</h1>
          <h1 id="last-name">DeSeta</h1>
        </div>
        <div className="button-container">
          <motion.button whileHover={{scale:1.2}} class="button">
            <FontAwesomeIcon className="button-icon" icon={faGithub} />
            <span className="button-text">Github</span>
          </motion.button>
          <motion.button whileHover={{scale:1.2}} class="button">
            <FontAwesomeIcon className="button-icon" icon={faLinkedin} />
            <span className="button-text">LinkedIn</span>
          </motion.button>
          <motion.button whileHover={{scale:1.2}} class="button">
            <FontAwesomeIcon className="button-icon" icon={faEnvelope} />
            <span className="button-text">Email</span>
          </motion.button>
          <motion.button whileHover={{scale:1.2}} class="button">
            <FontAwesomeIcon className="button-icon" icon={faFileLines} />
            <span className="button-text">Resume</span>
          </motion.button>
        </div>
      </header>
      <div className='properties'>
        {properties.map((item)=> (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default App;
