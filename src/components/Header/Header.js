import React, { useState } from 'react'
import "./Header.css"
export default function Header() {

    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }


  return (
    <header className='Header'>
        <h2 className='Header-h1'>
            <a className='header-a'>Joaquin</a>
        </h2>

        <button className='Header-button' onClick={handleMenu}>
            {menu ?
                <svg className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            :
                <svg className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            }
        </button>
        
        <nav className={`Header-nav ${menu ? "active" : ""}`}>
            <ul className='Header-ul'>
                <li className='Header-li'>Inicio</li>
                <li className='Header-li'>Sobre mí</li>
                <li className='Header-li'>Proyectos</li>
                <li className='Header-li'>Tecnologias</li>
                <li className='Header-li'>Contacto</li>
            </ul>
        </nav>
    </header>
    
  )
}
