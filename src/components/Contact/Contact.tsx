"use client";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import Link from "next/link";
import Toast from '../toast/toast'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          (resul) => {
            resul.status == 200 ?
              (setMessage("El email se envió con éxito."))
              :
              (setMessage(resul.text || "Ha ocurrido un error, intente nuevamente."))

            setToast(true);
          },
          (error) => {
            setMessage(error.text || "Ha ocurrido un error, intente nuevamente.");
            setToast(true);
          }
        );
      form.current.reset();
    }
  };

  const onCloseToast = () => setToast(prev => !prev)

  return (
    <div className={style.contact} id="contact">
      {toast && <Toast message={message} show={toast} onClose={onCloseToast} />}
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
