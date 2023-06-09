import style from './Home.module.css'
import Joaquin from 'public/Images/Joaquin-De-Luca.png';
import cv from 'public/Images/cv04.png';
import linkedin from 'public/Images/linkedin.png';
import github from 'public/Images/github2.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={style.homeContainer} id='home'>
        <div className={style.homeInfo}>
            <span className={style.homeSpan}>Soy Desarrollador Web Full Stack</span>
            <p className={style.homeP}>Me encanta trabajar en aplicaciones web utilizando tecnologías como MongoDB, Express, React, NodeJS</p>
            <div className={style.homeIconContainer}>
              <Link href='https://www.linkedin.com/in/joaquindeluca/' target='_blank'><Image width={45} className={style.homeImgIcon} src={linkedin} alt='linkedin'/></Link>
              <Link href='https://github.com/JoaquinDeLuca' target='_blank'><Image width={45} className={style.homeImgIcon} src={github} alt='Github'/></Link>
              <Link href='https://drive.google.com/file/d/1VGKF0wNnAExV90w7cO3PSFeCzCbH_eYe/view?usp=sharing' target='_blank'><Image width={45} className={style.homeImgIcon} src={cv} alt='cv'/></Link>
            </div>
        </div>
        <Image priority={true} width={280} height={280} className={style.homeImgJoaquin} src={Joaquin} alt='Joaquin'/> 
    </div>
  )
}
