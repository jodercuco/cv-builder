import React from "react";

const LanguagesForm = ({ cvData, setCvData }) => {
  // ✅ Protección correcta
  const languagesList = cvData.languages || []; 

  const handleChange = (index, field, value) => {
    // 1. Clonar el array de idiomas (copia superficial)
    const updatedLanguages = [...languagesList];
    
    // 2. 💡 CORRECCIÓN: Clonar el objeto específico que vamos a modificar
    const updatedItem = { ...updatedLanguages[index] };
    
    // 3. Modificar la copia del objeto
    updatedItem[field] = value;
    
    // 4. Reemplazar el objeto antiguo en el array con el objeto modificado
    updatedLanguages[index] = updatedItem;

    // 5. Establecer el nuevo estado
    setCvData({ ...cvData, languages: updatedLanguages });
  };

  const addLanguage = () => {
    const newLanguage = { name: "", level: "" };
    setCvData({ ...cvData, languages: [...languagesList, newLanguage] });
  };

  const removeLanguage = (index) => {
    const updatedLanguages = languagesList.filter((_, i) => i !== index);
    setCvData({ ...cvData, languages: updatedLanguages });
  };

  return (
    <section>
      <h3>Idiomas</h3>

      {languagesList.map((lang, index) => (
        <div key={index} className="language-inputs">
          <h5>Idioma {index + 1}</h5>

          <div className="inputs-group">
            <input
              type="text"
              placeholder="Idioma (Ej: Inglés)"
              value={lang.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />

            <input
              type="text"
              placeholder="Nivel (Ej: B2, C1, Nativo...)"
              value={lang.level}
              onChange={(e) => handleChange(index, "level", e.target.value)}
            />

            <button
              onClick={() => removeLanguage(index)}
              className="delete-button"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <button onClick={addLanguage} className="add-button">
        + Añadir idioma
      </button>
    </section>
  );
};

export default LanguagesForm;
