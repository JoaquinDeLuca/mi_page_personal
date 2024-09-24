'use client'
import style from './Projects.module.css'
import Image from 'next/image';
import projectsJson from './projects.json'
import Link from 'next/link';

export default function Projects() {
    return (
        <div className={style.projects} id='projects'>
            <div className={style.projectsContainer}>
                {/* <h2 className={style.projectsH2}>Proyectos</h2> */}
                <p className={style.projectsP}>Algunos de los proyectos que he desarrollado</p>
                {projectsJson.map((project) =>
                    <div key={project.id} className={style.projectsContainerCard}>
                        <div className={style.projectsImgContainer}>
                            <Image
                                className={style.projectsImg}
                                width={100}
                                height={50}
                                sizes="(max-width: 768px) 100vw"
                                quality={100}
                                src={`${project.src}`}
                                alt={project.name}
                            />
                            <div className={style.projectDescription}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p><span className={style.span}>Tecnologías: </span> {project.tech.join(" - ")}</p>
                            </div>
                        </div>
                        <div className={style.projectsButtons}>
                            <p className={style.projectsName}>{project.name}</p>
                            <button className={style.projectsBtn}>
                                <Link className={style.link} href={project.link} target='_blank'>
                                    Demo
                                </Link>
                            </button>
                            <button className={style.projectsBtn}>
                                <Link className={style.link} href={project.repo} target='_blank'>
                                    GitHub
                                </Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
