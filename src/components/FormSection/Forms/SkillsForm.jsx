import React from "react";

const SkillForm = ({ cvData, setCvData }) => {
  // Aseguramos que education sea siempre un array
  const skillList = cvData.skills || [];

  const handleChange = (index, field, value) => {
    const updatedSkill = [...skillList];
    updatedSkill[index][field] = value;
    setCvData({ ...cvData, skills: updatedSkill });
  };

  const addSkill = () => {
    const newSkill = { title: "", center: "", year: "" };
    setCvData({ ...cvData, skills: [...skillList, newSkill] });
  };

  const removeSkill = (index) => {
    const updatedSkill = skillList.filter((_, i) => i !== index);
    setCvData({ ...cvData, skills: updatedSkill });
  };

  return (
    <section>
      <h3>Hablidades</h3>

      {skillList.map((ski, index) => (
        <div key={index} className="skill-inputs">
          <h5>Habilidad {index + 1}</h5>

          <div className="inputs-group">
          <input
            type="text"
            placeholder="Habilidad"
            value={ski.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
          />

          <button onClick={() => removeSkill(index)} className="delete-button">Eliminar</button>
          </div>
        </div>
      ))}

      <button onClick={addSkill} className="add-button">+ Añadir habilidad</button>
    </section>
  );
};

export default SkillForm;