import React from 'react'

import AboutMeForm from "./Forms/AboutMeForm";
import ContactForm from "./Forms/ContactForm";
import DisponibilityForm from "./Forms/DisponibilityForm";
import EducationForm from "./Forms/EducationForm";
import ExperienceForm from "./Forms/ExperienceForm";
import LanguagesForm from "./Forms/LanguagesForm";
import NameForm from "./Forms/NameForm";
import OtherForm from "./Forms/OtherForm";
import SkillsForm from "./Forms/SkillsForm";
import { DownloadButton } from './Forms/DownloadButton';
import PhotoUpload from "./Forms/PhotoUpload";

export const FormSection = ({ cvData, setCvData, cvRef }) => {
  return (
    <div className='forms-container'>
        <h1>CREA TU CURRICULUM</h1>

        <div className='forms'>
          <div className="name-photo-container">
            <NameForm cvData={cvData} setCvData={setCvData} />
            <PhotoUpload cvData={cvData} setCvData={setCvData} />
          </div>
          
          <ContactForm cvData={cvData} setCvData={setCvData} />
          <EducationForm cvData={cvData} setCvData={setCvData} />
          <SkillsForm cvData={cvData} setCvData={setCvData} />
          <LanguagesForm cvData={cvData} setCvData={setCvData} />
          <DisponibilityForm cvData={cvData} setCvData={setCvData} />
          
          <AboutMeForm cvData={cvData} setCvData={setCvData} />
          <ExperienceForm cvData={cvData} setCvData={setCvData} />
          <OtherForm cvData={cvData} setCvData={setCvData} />
          
          

          <DownloadButton cvRef={cvRef} />
        </div>
    </div>
  )
}

export default FormSection;