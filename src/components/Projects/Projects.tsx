'use client'
import style from './Proyects.module.css'
import Amazing from 'public/Images/Amazing-Events.png';
import Petshop from 'public/Images/Petshop.png';
import Surface from 'public/Images/Surface.png';
import Mytinerary from 'public/Images/Mytinerary-.png';
import MytineraryApp from 'public/Images/mytineraryMobile.png'
import SpeakerShop from 'public/Images/Speakershop.png'
import Image from 'next/image';
// import PeliFLix from '../../Assets/Img/peliflix.png'
// import Portfolio from '../../Assets/Img/portfolio.png'

export default function Projects() {
    
    const proyects = [
        {
            id: "0",
            name: "Speaker Shop",
            src: SpeakerShop,
            link: "https://store-five-pied.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/store"
        },
        {
            id: "1",
            name: "Surface",
            src: Surface,
            link: "https://surface-ashen.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/surface"
        },
        {
            id: "2",
            name: "My Tinerary",
            src: Mytinerary,
            link: "https://mytinerary-eta.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mytinerary-web"
        },
        {
            id: "3",
            name: "My Tinerary App",
            src: MytineraryApp,
            link: "",
            repo: "https://github.com/JoaquinDeLuca/my-tinerary-MobileApp"
        },
        // {
        //     id: "4",
        //     name: "PeliFLix",
        //     src: PeliFLix,
        //     link: "https://challenge-peliflix.vercel.app/",
        //     repo: "https://github.com/JoaquinDeLuca/Challenge"
        // },
        {
            id: "5",
            name: "Amazing Events",
            src: Amazing,
            link: "https://joaquindeluca.github.io/amazing-events/",
            repo: "https://github.com/JoaquinDeLuca/amazing-events"
        },
        {
            id: "6",
            name: "Petshop",
            src: Petshop,
            link: "https://mindy-petshop-rho.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mindy_petshop"
        },
        // {
        //     id: "6",
        //     name: "Portfolio",
        //     src: Portfolio,
        //     link: "https://joaquin-de-luca.vercel.app/",
        //     repo: "https://github.com/JoaquinDeLuca/mi_page_personal"
        // }
    ]

  return (
    <div className={style.proyects} id='proyects'>
        <div className={style.proyectsContainer}>
            <h2 className={style.projectsH2}>Proyectos</h2>
            <p className={style.proyectsP}>Mis proyectos hasta ahora</p>
            {proyects.map( (proyect) => 
             <div key={proyect.id} className={style.proyectsContainerCard}>
                <div className={style.proyectsImgContainer}>
                    <Image  className={style.proyectsImg} src={proyect.src} alt={proyect.name}/>
                </div>
                <div className={style.proyectsButtons}>
                    <p className={style.proyectsName}>{proyect.name}</p>
                    <button className={style.proyectsBtn} onClick={ () => window.open(proyect.link)}>Demo</button>
                    <button className={style.proyectsBtn} onClick={ () => window.open(proyect.repo)}>GitHub</button>
                </div>
             </div>
            )}
        </div>
    </div>
  )
}
