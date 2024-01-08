import './index.css';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import PdfPreview from './components/PDF'; 
import Main from './Main'; 

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/resume" element={<PdfPreview/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
