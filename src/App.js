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
    // Initialize SplitType only when the component mounts
    const myName = new SplitType('#my-name');
    gsap.to(myName.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1
    });

    // Cleanup function to run when the component unmounts
    return () => {
      myName.revert();
    };
  }, []);

  return (
    <div className="App">
      <header>
        <h1 id="my-name">Dominick DeSeta</h1>
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
