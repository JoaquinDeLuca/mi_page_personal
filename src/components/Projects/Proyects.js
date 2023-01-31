import './Proyects.css'
import Amazing from '../../Assets/Img/Amazing-Events.png';
import Petshop from '../../Assets/Img/Petshop.png';
import Surface from '../../Assets/Img/Surface.png';
import Mytinerary from '../../Assets/Img/Mytinerary-.png';

export default function Projects() {
    
    const proyects = [
        {
            id: "1",
            name: "Amazing Events",
            src: Amazing,
            link: "https://joaquindeluca.github.io/amazing-events/",
            repo: "https://github.com/JoaquinDeLuca/amazing-events"
        },
        {
            id: "2",
            name: "Petshop",
            src: Petshop,
            link: "https://mindy-petshop-rho.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mindy_petshop"
        },
        {
            id: "3",
            name: "My Tinerary",
            src: Mytinerary,
            link: "https://mytinerary-eta.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mytinerary-web"
        },
        {
            id: "4",
            name: "Surface",
            src: Surface,
            link: "https://surface-ashen.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/surface"
        }
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
                    <button className='proyectsBtn' onClick={ () => window.open(proyect.link)}>Demo</button>
                    <button className='proyectsBtn' onClick={ () => window.open(proyect.repo)}>GitHub</button>
                </div>
             </div>
            )}
        </div>
    </div>
  )
}
