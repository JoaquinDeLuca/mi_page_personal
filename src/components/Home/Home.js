import './Home.css'
import Joaquin from '../../Assets/Img/Joaquin-De-Luca.png';
import cv from '../../Assets/Img/cv04.png';
import linkedin from '../../Assets/Img/linkedin.png';
import github from '../../Assets/Img/github2.png';

export default function Home() {
  return (
    <div className='homeContainer' id='home'>
        <div className='homeInfo'>
            <span className='homeSpan'>Soy Desarrollador Web Full Stack</span>
            <p className='homeP'>Me encanta trabajar en aplicaciones web utilizando tecnologias como MongoDB, Express, React, NodeJS</p>
            <div className='homeIconContainer'>
              <a className='a' href='https://www.linkedin.com/in/joaquindeluca/' target='_blank' rel='noreferrer' ><img className='homeImgIcon' src={linkedin} alt='linkedin'/></a>
              <a href='https://github.com/JoaquinDeLuca' target='_blank' rel='noreferrer'><img className='homeImgIcon' src={github} alt='Github'/></a>
              <a href='https://drive.google.com/file/d/1alqFVTm4AmITCTJRwQF4o4LzLydYku6L/view?usp=sharing' target='_blank' rel='noreferrer' ><img className='homeImgIcon' src={cv} alt='cv'/></a>
            </div>
        </div>
        <img className='homeImgJoaquin' src={Joaquin} alt='Joaquin'/> 
    </div>
  )
}
