import './technologies.css'
import Html from '../../Assets/Img/html.png';
import Css from '../../Assets/Img/css.png';
import Javascript from '../../Assets/Img/javascript.png';
import Mongodb from '../../Assets/Img/mongodb.png';
import React from '../../Assets/Img/react.png';
import Node from '../../Assets/Img/node.png';
import Redux from '../../Assets/Img/redux.png';
import Express from '../../Assets/Img/express.png';
import Github from '../../Assets/Img/github.png';
import Bootstrap from '../../Assets/Img/bootstrap..png';
import Nextjs from '../../Assets/Img/nextjs.png';

export default function technologies() {

    const techs = [
        {
            id: 1,
            src: Html,
            title: "HTMl"
        },
        {
            id: 2,
            src: Css,
            title: "CSS"
        },
        {
            id: 3,
            src: Javascript,
            title: "JavaScript"
        },
        {
            id: 4,
            src: React,
            title: "ReactJS"
        },
        {
            id: 5,
            src: Redux,
            title: "Redux"
        },
        {
            id: 6,
            src: Node,
            title: "NodeJS"
        },
        {
            id: 7,
            src: Mongodb,
            title: "MongoDB"
        },
        {
            id: 8,
            src: Express,
            title: "Express"
        },
        {
            id: 9,
            src: Bootstrap,
            title: "Bootstrap"
        },
        {
            id: 10,
            src: Github,
            title: "GitHub"
        },    
    ]



  return (
    <div className='technologies'>
        <div className='technologiesContainer'>
            <h2 className='technologiesH2'>Tecnologías</h2>
            <p className='technologiesP'>Estas son las tecnologías con las que he trabajado y usado en mis proyectos.</p>
            <div className='technologiesCardContainer'>
                {techs.map( tech => 
                    <div className='technologiesCard' key={tech.id} >
                        <img className='technologiesImg' src={tech.src} alt={tech.title}/>
                        <p className='technologiesTitle'>{tech.title}</p>
                    </div>
                )}
            </div>
            <div className='technologiesLearningOne'>
                <h4 className='technologiesP'>Estoy aprendiendo...</h4>
            </div>
            <div className='technologiesLearning'>
                <img className='technologiesImg' src={Nextjs} alt='nextjs' />
                <p className='technologiesTitle'>NextJS</p>
            </div>
        </div>
    </div>
  )
}
