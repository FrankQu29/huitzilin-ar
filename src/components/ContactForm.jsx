import React from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        <h2 className="contact-title">¿Quieres saber más de Huitzillin?</h2>
        <p className="contact-subtitle">
          Completa el formulario para ponernos en contacto contigo
        </p>

        <form
          name="contacto"
          method="POST"
          netlify
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <p hidden>
            <label hidden>
              No llenar esto: <input name="bot-field" />
            </label>
          </p>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input type="text" name="nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" rows="4" required></textarea>
          </div>

          <div className="form-button">
            <button type="submit">Enviar mensaje</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
