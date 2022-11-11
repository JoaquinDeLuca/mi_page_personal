import './Projects.css'

export default function Projects() {
    
    const proyects = [
        {
            id: "1",
            name: "Amazing Events",
            src: "link",
            link: "https://joaquindeluca.github.io/amazing-events/",
            repo: "https://github.com/JoaquinDeLuca/amazing-events"
        },
        {
            id: "2",
            name: "Petshop",
            src: "link",
            link: "https://mindy-petshop-rho.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mindy_petshop"
        },
        {
            id: "3",
            name: "My Tinerary",
            src: "link",
            link: "https://mytinerary-eta.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/mytinerary-deluca-ochoa-ojeda"
        },
        {
            id: "4",
            name: "Surface",
            src: "link",
            link: "https://surface-ashen.vercel.app/",
            repo: "https://github.com/JoaquinDeLuca/surface"
        }
    ]

  return (
    <div className="proyects">
        <div className="proyectsCotainer">
            <h2 className="projectsH2">Projects</h2>
            {proyects.map( proyect => 
             <div className='proyectsConatinerCard'>
                <div className='proyectsImgContainer'>
                    <img className='proyectsImg' src={proyect.src} alt={proyect.name}/>
                </div>
                <div className='proyectsButtons'>
                    <button className='proyectsBtn'>Demo</button>
                    <button className='proyectsBtn'>GitHub</button>
                </div>
             </div>
            )}
        </div>
    </div>
  )
}
