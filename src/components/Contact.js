import React from "react";
import logo from "../assets/images/logo.png"; 
import "../assets/css/contact.css";

function Contact() {
  return (
    <>
    <div className="container">
        <section className="contact-page">
        <div className="contact-page__container">
            <h2 className="contact-page__heading">Contacto</h2>
            <p className="contact-page__description">
                Escríbenos un mensaje y nos pondremos en contacto contigo a la brevedad.
            </p>
            <form className="contact-page__form">
            <div className="contact-page__form-group">
                <label htmlFor="name" className="contact-page__label">Nombre:</label>
                <input
                type="text"
                id="name"
                className="contact-page__input"
                placeholder="Escribe tu nombre"
                />
            </div>
            <div className="contact-page__form-group">
                <label htmlFor="email" className="contact-page__label">Email:</label>
                <input
                type="email"
                id="email"
                className="contact-page__input"
                placeholder="Enter your email"
                />
            </div>
            <div className="contact-page__form-group">
                <label htmlFor="message" className="contact-page__label">Mensaje:</label>
                <textarea
                id="message"
                className="contact-page__textarea"
                placeholder="Escribe tu mensaje..."
                ></textarea>
            </div>
            <button type="submit" className="contact-page__button">
                Enviar <i class="bi bi-send"></i>
            </button>
            </form>
        </div>
        </section>
        <img className="d-block mx-auto mb-4" src={logo} alt="Logo"/>
    </div>

    </>
  );
}

export default Contact;
