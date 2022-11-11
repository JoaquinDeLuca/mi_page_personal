import './Home.css'
import Joaquin from '../../Assets/Img/I.png';

export default function Home() {
  return (
    <div className='homeContainer'>
        <div className='homeInfo'>
            <h1 className='homeH1'>Soy Desarrollador Web Full Stack</h1>
            <p className='homeP'>Me encanta trabajar en aplicaciones web utilizando tecnologias como MongoDB, Express, React, NodeJS</p>
        </div>
        <img className='homeImgJoaquin' src={Joaquin} alt='Joaquin'/> 
    </div>
  )
}
