// AboutMeForm.jsx
import React from "react";

const OthersForm = ({ cvData, setCvData }) => {
  // Aseguramos que other sea siempre un array
  const otherList = cvData.other || [];
  const handleChange = (index, field, value) => {
    const updatedOther = [...otherList];
    updatedOther[index][field] = value;
    setCvData({ ...cvData, other: updatedOther });
  };

  const addOther = () => {
    const newOther = { title: "", description: "" };
    setCvData({ ...cvData, other: [...otherList, newOther] });
  };
  const removeOther = (index) => {
    const updatedOther = otherList.filter((_, i) => i !== index);
    setCvData({ ...cvData, other: updatedOther });
  };

  return (
    <section>
      <h3>Otros</h3>
      {otherList.map((oth, index) => (
        <div key={index} className="other-inputs">
          <h5>Otro {index + 1}</h5> 

          <div className="big-inputs-group">
            <div className="inputs-group">
              <input
                type="text"
                placeholder="Título"
                value={oth.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
            </div>
              <textarea
                type="text"
                placeholder="Descripción"
                value={oth.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
              />
              <button onClick={() => removeOther(index)} className="delete-button">Eliminar</button>
            
          </div>
        </div>
      ))}
      <button onClick={addOther} className="add-button">+ Añadir otro</button>
    </section>
  );
};

export default OthersForm;
