const ContactForm = ({ cvData, setCvData }) => {
  const contact = cvData.contact || {}; // protección por si no existe aún

  return (
    <section className="contact-form">
      <h3>Contacto</h3>
    <div className="contact-inputs">
      <div>
        <h5>Teléfono</h5>
          <input
            type="phone"
            placeholder="Télefono"
            value={contact.phone || ""}
            onChange={(e) =>
              setCvData({ ...cvData, contact: { ...contact, phone: e.target.value } })
            }
          />
      </div>

      <div>
        <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            value={contact.email || ""}
            onChange={(e) =>
              setCvData({ ...cvData, contact: { ...contact, email: e.target.value } })
            }
          />
      </div>
      <div>
        <h5>Dirección</h5>
        <input
          type="text"
          placeholder="Región, Ciudad"
          value={contact.address || ""}
          onChange={(e) =>
            setCvData({ ...cvData, contact: { ...contact, address: e.target.value } })
          }
        />
      </div>
      <div>
        <h5>Sitio Web</h5>
        <input
          type="text"
          placeholder="example.es"
          value={contact.website || ""}
          onChange={(e) =>
            setCvData({ ...cvData, contact: { ...contact, website: e.target.value } })
          }
        />
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
