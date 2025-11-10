import React from "react";

const SkillForm = ({ cvData, setCvData }) => {
  // ✅ Protección correcta
  const skillList = cvData.skills || [];

  const handleChange = (index, field, value) => {
    // 1. Clonar el array de habilidades (copia superficial)
    const updatedSkill = [...skillList];

    // 2. 💡 CORRECCIÓN: Clonar el objeto específico que vamos a modificar
    const updatedItem = { ...updatedSkill[index] };
    
    // 3. Modificar la copia del objeto
    updatedItem[field] = value;
    
    // 4. Reemplazar el objeto antiguo en el array con el objeto modificado
    updatedSkill[index] = updatedItem;

    // 5. Establecer el nuevo estado
    setCvData({ ...cvData, skills: updatedSkill });
  };

  const addSkill = () => {
    // Nota: Los campos iniciales title, center, year no coinciden con el uso
    // actual del formulario (solo title), pero la estructura es correcta.
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