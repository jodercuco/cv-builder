// AboutMeForm.jsx
import React from "react";

const AboutMeForm = ({ cvData, setCvData }) => {
  return (
    <section>
      <h3>Sobre mí</h3>
      <textarea
        value={cvData.about || ""}
        onChange={(e) => setCvData({ ...cvData, about: e.target.value })}
        placeholder="Escribe algo sobre ti..."
      />
    </section>
  );
};

export default AboutMeForm; // 👈 ESTA LÍNEA ES CRUCIAL
