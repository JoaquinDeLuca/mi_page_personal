import './Projects.css'
import Amazing from '../../Assets/Img/Amazing-Events.png';
import Petshop from '../../Assets/Img/Petshop.png';
import Surface from '../../Assets/Img/Surface.png';

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
            src: Petshop,
            link: "https://mytinerary-eta.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mytinerary-deluca-ochoa-ojeda"
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
    <div className="proyects">
        <div className="proyectsContainer">
            <h2 className="projectsH2">Projectos</h2>
            {proyects.map( (proyect, i) => 
             <div key={i} className='proyectsContainerCard'>
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
