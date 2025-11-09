import React, { forwardRef, useRef } from "react";
import "../CVPreview.css";


export const CVPreview = forwardRef(({ cvData }, ref) => {
  const contenedorRef = useRef(null);

  const about = cvData?.about || "";
  const { contact } = cvData || {};
  const { phone, email, address, website } = contact || {};
  const disponibility = cvData?.disponibility || "";
  const education = cvData?.education || [];
  const skill = cvData?.skills || [];
  const name = cvData?.name || "";

  const languages = cvData?.languages || [];

  const experiences = cvData?.experiences || [];
  
  const other = cvData?.other || [];

  return (
  
    <div
      ref={ref}
      className="cv-container"
    >
      <div className="header">
        <div className="profile-section">
          <img
            src={cvData.photo || "/static/images/profile_pictures/graduacion_cuadrada.jpg"}
            className="profile_picture"
          />
          
        </div>
        <div>
          <h3>Contacto</h3>
          <hr />
          <ul>
            <li>
              <p>
                <i className="bi bi-telephone"></i> {phone}
              </p>
            </li>
            <li>
              <p>
                <i className="bi bi-envelope-at-fill"></i> {email}
              </p>
            </li>
            <li>
              <p>
                <i className="bi bi-geo-fill"></i> {address}
              </p>
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
        <div>
          <h3>Educación</h3>
          <hr />
          <ul>
            {education.map((edu, i) => (
              <li key={i}>
                <p>
                  {edu.title} - {edu.center} ({edu.year})
                </p>
              </li>
            ))}
          </ul>


        </div>

        <div>
          <h3>Habilidades</h3>
          <hr />
          <ul>
            {skill.map((ski, i) => (
              <li key={i}>
                <p>
                  {ski.title} 
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Idiomas</h3>
          <hr />
            <ul>
              {cvData.languages?.map((lang, i) => (
                <li key={i}>
                  <p>{lang.name} — {lang.level}</p>
                </li>
              ))}
            </ul>
        </div>

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

      <div className="formation">
        <h1>{ name } </h1>

        <div>
          <h3>Sobre mí</h3>
          <hr />
          <p>{about}</p>
        </div>


        <div>
          <h3>Experiencia</h3>
          <hr />
          <div>
            {cvData.experiences?.length > 0 ? (
              cvData.experiences.map((exp, i) => (
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

        <div>
          {cvData.other.map((oth, i) => (
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