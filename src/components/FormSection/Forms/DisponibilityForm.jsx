
import React from "react";

const DisponibilityForm = ({ cvData, setCvData }) => {
  return (
    <section>
      <h3>Disponibilidad</h3>
      <input
        
        value={cvData.disponibility || ""}
        onChange={(e) => setCvData({ ...cvData, disponibility: e.target.value })}
        placeholder="Escribe tu disponibilidad..."
      />
    </section>
  );
};

export default DisponibilityForm;
