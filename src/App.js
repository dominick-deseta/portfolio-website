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
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

function App() {
  const Icon = FontAwesome["FaBed"];

  useEffect(() => {
    gsap.registerPlugin(SplitType, ScrollTrigger);

    const splitFirst = new SplitType('#first-name', {types: "chars"});
    const splitLast = new SplitType('#last-name', {types: "chars"});
    const splitBio = new SplitType('#bio', {types: "lines, words" });
    const splitProjects = new SplitType('#projects__title', {types: "chars"})

    gsap.set('#first-name', {opacity: 1})
    gsap.set('#last-name', {opacity: 1})

    gsap.to(splitFirst.chars, {
      delay: 0.3,
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      ease: "power2.out",
      onComplete: () => { splitFirst.revert() }
    });

    gsap.to(splitLast.chars, {
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      delay: 0.8, 
      ease: "power2.out",
      onComplete: () => { splitLast.revert() }
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

    gsap.fromTo('.headshot',
      { x: "-10vh", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bio-container",
          start: "top 60%", 
        }
      }
    );

    gsap.set('#bio',{opacity:1})
    const numRows = splitBio.lines.length;
    for (let i = 0; i < numRows; i++) {
      const words = splitBio.lines[i].children;
      for (let j = 0; j < words.length; j++) {
        gsap.fromTo(words[j],
          { x: "10vh", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            delay: j * 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".bio-container",
              start: "top 60%", 
            },
            onComplete: () => { 
              if (i == numRows - 1 && j == words.length - 1) {
                setTimeout(() => {
                  splitBio.revert();
                }, 1000); 
              }
            }
          }
        );
      };
    };

    gsap.to(".projects__underline", 
      { 
        scaleX: 1, 
        duration: 1, 
        delay: 0.2,
        ease: "power1.out",
        transformOrigin: "left",
        scrollTrigger: {
          trigger: ".projects__header",
          start: "top 80%", 
        },
      }
    );

    gsap.to(splitProjects.chars, {
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      delay: 0.2,
      ease: "power2.out",
      onComplete: () => { splitProjects.revert() },
      scrollTrigger: {
        trigger: ".projects__header",
        start: "top 80%", 
      },
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
      <div className="bio-container">
        <motion.img className="headshot" src={`https://res.cloudinary.com/dv5ot0eg0/image/upload/v1703022042/headshot.jpg`} alt={`Headshot`}/>
        <h2 className="bio" id="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum ipsum arcu, dignissim posuere turpis tincidunt vel. Donec suscipit lorem at tempor sagittis. Vestibulum semper ex arcu, eget sodales sem condimentum a. Nunc nec facilisis augue. Duis consectetur at nulla vitae volutpat. Proin sit amet eleifend neque, vel dapibus turpis. Nulla in euismod nulla. Cras et sapien non nunc dapibus pharetra nec et mauris. Phasellus bibendum tincidunt libero, in efficitur ante auctor non. In ornare ante mollis metus egestas, vel tincidunt ante tempor.
        </h2>
      </div>
      <div className="projects__header">
        <h3 id="projects__title">PROJECTS</h3>
        <div className="projects__underline"/>
      </div>
      <div className='properties'>
        {properties.map((item,index)=> (
          <Card data={item} key={item.id} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default App;
