import React, { useRef } from 'react';
// 1. 💡 IMPORTAR el hook de persistencia
import useLocalStorage from './hooks/useLocalStorage'; 

import logo from './logo.svg';
import './CVmaker.css';
import { FormSection } from './components/FormSection/FormSection';
import { CVPreview } from './components/CVPreview';
import ImageGenerator from './components/ImageGenerator';

// En App.js

function App() {
  const cvRef = useRef();

  const [cvData, setCvData] = useLocalStorage('cvMasterData', {
    personal: {},
    about: "",
    contact: {
      phone: '',
      email: '',
      address: '',
      website: '',
    },
    education: [],
    experience: [],
    languages: [],
    skills: [],
    disponibility: "",
    PHOTO: "",
    
    // 💡 CORRECCIÓN: Incluir 'other' y asegurarse de que sea un array vacío
    other: [], 
  });

  return (
    <div className="app-container">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      
      {/* 4. Los props pasan igual, pero ahora cvData está persistente */}
      <FormSection cvData={cvData} setCvData={setCvData} cvRef={cvRef} />
      
      <CVPreview ref={cvRef} cvData={cvData} />
      
      <ImageGenerator 
        targetRef={cvRef} 
        cvData={cvData} 
      />
    </div>
  );
}

export default App;