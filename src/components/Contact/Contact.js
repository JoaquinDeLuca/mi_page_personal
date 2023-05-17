"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Su email se envio con exito", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={style.contact} id="contact">
      <div className={style.contactContainer}>
        <h2 className={style.contactH2}>Contacto</h2>
        <p className={style.p}>
          Contáctame a través del siguiente formulario o por medio de{" "}
          <Link
            className={style.link}
            target="_blank"
            href="https://www.linkedin.com/in/joaquindeluca/"
          >
            LinkedIn.
          </Link>
        </p>
        <form className={style.contactForm} ref={form} onSubmit={sendEmail}>
          <input
            className={style.contactinput}
            type="text"
            name="user_name"
            placeholder="Nombre"
            required
          />
          <input
            className={style.contactinput}
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            className={style.contactTextarea}
            required
          />
          <button className={style.contactBtn} type="submit" value="Send">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
