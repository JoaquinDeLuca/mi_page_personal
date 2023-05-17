import style from './technologies.module.css'
import Html from 'public/Images/html.png';
import Css from 'public/Images/css.png';
import Javascript from 'public/Images/javascript.png';
import Mongodb from 'public/Images/mongodb.png';
import React from 'public/Images/react.png';
import Node from 'public/Images/node.png';
import Redux from 'public/Images/redux.png';
import Express from 'public/Images/express.png';
import Github from 'public/Images/github.png';
import Bootstrap from 'public/Images/bootstrap.png';
import Nextjs from 'public/Images/nextjs.png';
import Postman from 'public/Images/postman.png';
import Git from 'public/Images/git.png';
import Typescript from 'public/Images/typescript.png'
import Image from 'next/image';

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
        {
            id: 11,
            src: Git,
            title: "Git"
        },    
        {
            id: 12,
            src: Postman,
            title: "Postman"
        },
    ]



  return (
    <div className={style.technologies} id='technologies'>
        <div className={style.technologiesContainer}>
            <h2 className={style.technologiesH2}>Tecnologías</h2>
            <p className={style.technologiesP}>Estas son las tecnologías con las que he trabajado y usado en mis proyectos.</p>
            <div className={style.technologiesCardContainer}>
                {techs.map( tech => 
                    <div className={style.technologiesCard} key={tech.id} >
                        <Image className={style.technologiesImg} src={tech.src} alt={tech.title}/>
                        <p className={style.technologiesTitle}>{tech.title}</p>
                    </div>
                )}
            </div>
            <div className={style.technologiesLearningOne}>
                <h4 className={style.technologiesP}>Estoy aprendiendo...</h4>
            </div>
            <div className={style.technologiesLearning}>
                <Image className={style.technologiesImg} src={Nextjs} alt='nextjs' />
                <p className={style.technologiesTitle}>NextJS</p>
            </div>
            <div className={style.technologiesLearning}>
                <Image className={style.technologiesImg} src={Typescript} alt='Typescript' />
                <p className={style.technologiesTitle}>Typescript</p>
            </div>
        </div>
    </div>
  )
}
