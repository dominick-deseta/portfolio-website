import './index.css';
import './App.css';
import Card from "./components/Card"
import { properties } from "./constants/data"
import {Cloudinary} from "@cloudinary/url-gen";
import SplitType from 'split-type';
import { gsap } from "gsap";
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    gsap.registerPlugin(SplitType);

    // Target elements and split text into characters
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');

    const splitFirst = new SplitType(firstName, {type: "chars"});
    const splitLast = new SplitType(lastName, {type: "chars"});

    // Animation for each character in 'Dominick'
    gsap.to(splitFirst.chars, {
      delay: 0.3,
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Animation for each character in 'DeSeta'
    gsap.to(splitLast.chars, {
      duration: 0.5,
      translateY: 0,
      stagger: 0.05,
      delay: 0.8, // Optional delay to start after the first name
      ease: "power2.out"
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
      <div className='properties'>
        {properties.map((item)=> (
          <Card data={item} />
        ))}
      </div>
    </div>
  )
}

export default App;
