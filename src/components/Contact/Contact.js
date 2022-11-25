import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, 
            process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            alert('Su email se envio con exito',result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };


    return (
        <div className='contact'>
            <div className='contactContainer'>
                <h2 className='contactH2'>Contacto</h2>
                <p className='p'>Contáctame a través del siguiente formulario o por medio de <a className='a' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/joaquindeluca/'>LinkedIn.</a></p>

                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        <input className='contactinput' type="text" name="user_name" placeholder='Nombre' required/>
                        <input className='contactinput' type="email" name="user_email" placeholder='Email' required/>
                        <textarea name="message" placeholder='Mensaje'  className='contactTextarea' required/>
                        <button className='contactBtn' type="submit" value="Send" >Enviar</button>
                    </form>
            </div>
        </div>
    )
}
