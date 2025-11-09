import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './CVmaker.css';
import { FormSection } from './components/FormSection/FormSection';
import { CVPreview } from './components/CVPreview';

function App() {
  const cvRef = useRef();
  
  const [cvData, setCvData] = useState({
    personal: {},
    about: "",
    contact: {},
    education: [],
    experience: [],
    languages: [],
    skills: [],
    other: "",
    disponibility: "",
    other: [],
    PHOTO: "",
  });

  return (
    <div className="app-container">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
        <FormSection cvData={cvData} setCvData={setCvData} cvRef={cvRef} />
        <CVPreview ref={cvRef} cvData={cvData} />
    </div>
  );
}


export default App;