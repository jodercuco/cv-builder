import React, { forwardRef, useRef } from "react";
import "../CVPreview.css";


export const CVPreview = forwardRef(({ cvData }, ref) => {
  // Las declaraciones son perfectas, ya tienen la protección || []:
  const about = cvData?.about || "";
  const { contact } = cvData || {};
  const { phone, email, address, website } = contact || {};
  const disponibility = cvData?.disponibility || "";
  const education = cvData?.education || []; // ✅ Lista Protegida
  const skill = cvData?.skills || [];         // ✅ Lista Protegida
  const name = cvData?.name || "";
  const languages = cvData?.languages || []; // ✅ Lista Protegida
  const experiences = cvData?.experiences || []; // ✅ Lista Protegida
  const other = cvData?.other || [];           // ✅ Lista Protegida
  // ... (otras variables) ...

  return (
    <div ref={ref} className="cv-container">
      
      {/* --- SECCIÓN IZQUIERDA/HEADER (CONTENIDO PRINCIPAL Y CONTACTO) --- */}
      <div className="header">
        
        {/* Foto de Perfil */}
        <div className="profile-section">
          <img
            src={cvData.photo || "/static/images/profile_pictures/graduacion_cuadrada.jpg"}
            className="profile_picture"
            alt="Foto de perfil"
          />
        </div>
        
        {/* Contacto */}
        <div>
          <h3>Contacto</h3>
          <hr />
          <ul>
            <li>
              <p><i className="bi bi-telephone"></i> {phone}</p>
            </li>
            <li>
              <p><i className="bi bi-envelope-at-fill"></i> {email}</p>
            </li>
            <li>
              <p><i className="bi bi-geo-fill"></i> {address}</p>
            </li>
            <li>
              {website && (
                <p>
                  <i className="bi bi-globe"></i>{" "}
                  <a
                    href={website.startsWith("http") ? website : `https://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website}
                  </a>
                </p>
              )}
            </li>
          </ul>
        </div>
        
        {/* Educación */}
        <div>
          <h3>Educación</h3>
          <hr />
          <ul>
            {/* ✅ Se usa la variable local 'education' */}
            {education.map((edu, i) => ( 
              <li key={i}>
                <p>
                  {edu.title} - {edu.center} ({edu.year})
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Habilidades */}
        <div>
          <h3>Habilidades</h3>
          <hr />
          <ul>
            {/* ✅ Se usa la variable local 'skill' */}
            {skill.map((ski, i) => (
              <li key={i}>
                <p>{ski.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Idiomas */}
        <div>
          <h3>Idiomas</h3>
          <hr />
          <ul>
            {/* ✅ Se usa la variable local 'languages' */}
            {languages.map((lang, i) => (
              <li key={i}>
                <p>{lang.name} — {lang.level}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Disponibilidad */}
        <div>
          <h3>Disponibilidad</h3>
          <hr />
          <ul>
            <li>
              <p>{ disponibility }</p>
            </li>
          </ul>
        </div>
      </div>
      
      {/* --- SECCIÓN DERECHA/FORMATION (NOMBRE, SOBRE MÍ, EXPERIENCIA, OTROS) --- */}
      <div className="formation">
        <h1>{ name } </h1>

        {/* Sobre Mí */}
        <div>
          <h3>Sobre mí</h3>
          <hr />
          <p>{about}</p>
        </div>

        {/* Experiencia */}
        <div>
          <h3>Experiencia</h3>
          <hr />
          <div>
            {/* ✅ Se usa la variable local 'experiences' */}
            {experiences.length > 0 ? ( 
              experiences.map((exp, i) => ( 
                <div key={i}>
                  <h4>{exp.title} ({exp.time})</h4>
                  <p>{exp.description}</p>
                </div>
              ))
            ) : (
              <p>No hay experiencia añadida todavía.</p>
            )}
          </div>
        </div>

        {/* Otros (Información adicional) */}
        <div>
          {/* ✅ Se usa la variable local 'other' */}
          {other.map((oth, i) => ( 
            <div key={i}>
              <h3>{oth.title}</h3>
              <hr />
              <p>{oth.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});