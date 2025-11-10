import React from "react";

const ExperiencesForm = ({ cvData, setCvData }) => {
  // ✅ Protección correcta contra undefined
  const experiencesList = cvData.experiences || []; 

  const handleChange = (index, field, value) => {
    // 1. Clonar el array de experiencias (copia superficial)
    const updatedExperiences = [...experiencesList];
    
    // 2. 💡 CORRECCIÓN: Clonar el objeto específico que vamos a modificar
    const updatedItem = { ...updatedExperiences[index] };
    
    // 3. Modificar la copia del objeto
    updatedItem[field] = value;
    
    // 4. Reemplazar el objeto antiguo en el array con el objeto modificado
    updatedExperiences[index] = updatedItem;

    // 5. Establecer el nuevo estado (lo cual dispara el guardado en useLocalStorage)
    setCvData({ ...cvData, experiences: updatedExperiences });
  };

  const addExperiences = () => {
    const newExperience = { title: "", time: "", description: "" };
    setCvData({ ...cvData, experiences: [...experiencesList, newExperience] });
  };

  const removeExperiences = (index) => {
    const updatedExperiences = experiencesList.filter((_, i) => i !== index);
    setCvData({ ...cvData, experiences: updatedExperiences });
  };

  return (
    <section>
      <h3>Experiencia</h3>

      {experiencesList.map((exp, index) => (
        <div key={index} className="experience-inputs">
          <h5>Experiencia {index + 1}</h5>

          <div className="big-inputs-group">

            <div className="inputs-group">
              <input
                type="text"
                placeholder="Puesto de trabajo..."
                value={exp.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />

              <input
                type="text"
                placeholder="Meses o años de experiencia..."
                value={exp.time}
                onChange={(e) => handleChange(index, "time", e.target.value)}
              />

                          <button
              onClick={() => removeExperiences(index)}
              className="delete-button"
            >
              Eliminar
            </button>

            </div>
            <textarea
              type="text"
              placeholder="Descripción de las tareas realizadas..."
              value={exp.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />


          </div>
        </div>
      ))}

      <button onClick={addExperiences} className="add-button">
        + Añadir experiencia
      </button>
    </section>
  );
};

export default ExperiencesForm;