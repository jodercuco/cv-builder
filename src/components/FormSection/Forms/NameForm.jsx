// AboutMeForm.jsx
import React from "react";

const NameForm = ({ cvData, setCvData }) => {
  return (
    <section className="name-section">
      <h3>Nombre</h3>
      <input
        type="text"
        value={cvData.name || ""}
        onChange={(e) => setCvData({ ...cvData, name: e.target.value })}
        placeholder="Escribe tu nombre"
      />
    </section>
  );
};

export default NameForm; 
