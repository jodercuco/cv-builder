import React from "react";

const LanguagesForm = ({ cvData, setCvData }) => {
  const languagesList = cvData.languages || [];

  const handleChange = (index, field, value) => {
    const updatedLanguages = [...languagesList];
    updatedLanguages[index][field] = value;
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
