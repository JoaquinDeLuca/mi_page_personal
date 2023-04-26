import './Proyects.css'
import Amazing from '../../Assets/Img/Amazing-Events.png';
import Petshop from '../../Assets/Img/Petshop.png';
import Surface from '../../Assets/Img/Surface.png';
import Mytinerary from '../../Assets/Img/Mytinerary-.png';
import MytineraryApp from '../../Assets/Img/mytineraryMobile.png'
import PeliFLix from '../../Assets/Img/peliflix.png'
import SpeakerShop from '../../Assets/Img/Speakershop.png'
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
        {
            id: "4",
            name: "PeliFLix",
            src: PeliFLix,
            link: "https://challenge-peliflix.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/Challenge"
        },
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
    <div className="proyects" id='proyects'>
        <div className="proyectsContainer">
            <h2 className="projectsH2">Proyectos</h2>
            <p className='proyectsP'>Mis proyectos hasta ahora</p>
            {proyects.map( (proyect) => 
             <div key={proyect.id} className='proyectsContainerCard'>
                <div className='proyectsImgContainer'>
                    <img className='proyectsImg' src={proyect.src} alt={proyect.name}/>
                </div>
                <div className='proyectsButtons'>
                    <p className='proyectsName'>{proyect.name}</p>
                    <button className='proyectsBtn' onClick={ () => window.open(proyect.link)}>Demo</button>
                    <button className='proyectsBtn' onClick={ () => window.open(proyect.repo)}>GitHub</button>
                </div>
             </div>
            )}
        </div>
    </div>
  )
}
