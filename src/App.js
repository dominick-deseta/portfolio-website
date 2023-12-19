import './App.css';
import Card from "./components/Card"
import { properties } from "./constants/data"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import headshot from './resources/dom_headshot.jpg'

function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'dv5ot0eg0'}});
  const myImage = cld.image('headshot');

  return (
    <div className="App">
      <AdvancedImage cldImg={myImage} />
      <div className='properties'>
        {properties.map((item)=> (
          <Card data={item} />
        ))}
      </div>
    </div>
  )
}

export default App;
