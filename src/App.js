import './index.css';
import './App.css';
import Card from "./components/Card"
import { properties } from "./constants/data"
import {Cloudinary} from "@cloudinary/url-gen";
import SplitType from 'split-type';
import { gsap } from "gsap";
import { useEffect } from 'react';
import * as FontAwesome from "react-icons/fa";

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

    document.getElementById('expandableButton').addEventListener('click', function() {
      // Animation for expanding the button width and border-radius
      gsap.to('.button', {
        width: '150px', // Use 'auto' if you want to accommodate the length of the text
        padding: '0 20px', // Add padding to the left and right of the text
        duration: 0.5,
      });
      
      // To reveal the text, change the opacity and translate properties
      gsap.to('.button-text', {
        opacity: 1,
        x: 0,
        duration: 0.5,
      });
    
    });

    // Cleanup function for component unmount
    return () => {
      splitFirst.revert();
      splitLast.revert();
    };

  }, []);

  return (
    <div className="App">
      <header>
        <div className="name-container">
          <h1 id="first-name">Dominick</h1>
          <h1 id="last-name">DeSeta</h1>
        </div>
      </header>
      <button id="expandableButton" class="button">
          <Icon className="button-icon"/> 
          <span class="button-text">Button Text</span>
        </button>
      <div className='properties'>
        {properties.map((item)=> (
          <Card data={item} />
        ))}
      </div>
    </div>
  )
}

export default App;
