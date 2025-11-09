import React from "react";

const EducationForm = ({ cvData, setCvData }) => {
  // Aseguramos que education sea siempre un array
  const educationList = cvData.education || [];

  const handleChange = (index, field, value) => {
    const updatedEducation = [...educationList];
    updatedEducation[index][field] = value;
    setCvData({ ...cvData, education: updatedEducation });
  };

  const addEducation = () => {
    const newEducation = { title: "", center: "", year: "" };
    setCvData({ ...cvData, education: [...educationList, newEducation] });
  };

  const removeEducation = (index) => {
    const updatedEducation = educationList.filter((_, i) => i !== index);
    setCvData({ ...cvData, education: updatedEducation });
  };

  return (
    <section>
      <h3>Educación</h3>

      {educationList.map((edu, index) => (
        <div key={index}>
          <h5>Educación {index + 1}</h5>

          <div className="inputs-group">
            <input
              type="text"
              placeholder="Título o Grado"
              value={edu.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <input
              type="text"
              placeholder="Centro educativo"
              value={edu.center}
              onChange={(e) => handleChange(index, "center", e.target.value)}
            />
            <input
              className="education-age-input"
              type="text"
              placeholder="Año"
              value={edu.year}
              onChange={(e) => handleChange(index, "year", e.target.value)}
            />
            <button onClick={() => removeEducation(index)} className="delete-button">Eliminar</button>
          </div>
        </div>
      ))}

      <button onClick={addEducation} className="add-button">+ Añadir formación</button>
    </section>
  );
};

export default EducationForm;