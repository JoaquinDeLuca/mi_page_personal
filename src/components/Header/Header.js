import React from 'react'
import "./Header.css"
export default function Header() {


  return (
    <header className='Header'>
        <h1 className='Header-h1'>
            <a className='header-a'>Joaquin De Luca</a>
        </h1>
        <button className='Header-button'>
        <svg className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>
        <nav className='Header-nav active'>
            <ul className='Header-ul'>
                <li className='Header-li'>Home</li>
                <li className='Header-li'>Poyectos</li>
                <li className='Header-li'>Contacto</li>
            </ul>
        </nav>
    </header>
    
  )
}
