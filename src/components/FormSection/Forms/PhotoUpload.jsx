import React from "react";

const PhotoUpload = ({ cvData, setCvData }) => {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setCvData({ ...cvData, photo: reader.result }); // guardamos la imagen en Base64
      };

      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setCvData({ ...cvData, photo: "" });
  };

  return (
    <div className="photo-upload">
      <h3>Foto de perfil</h3>
      {cvData.photo ? (
        <div>
          <img
            src={cvData.photo}
            alt="Foto de perfil"
            className="preview-photo"
          />
          <button onClick={removePhoto} className="delete-button">
            Eliminar foto
          </button>
        </div>
      ) : (
        <label className="upload-label">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          <span className="upload-button">Subir foto</span>
        </label>
      )}
    </div>
  );
};

export default PhotoUpload;
