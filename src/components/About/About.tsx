import style from './About.module.css'

export default function About() {
  return (
    <div className={style.about} id='about'>
      <div className={style.aboutContainer}>
        <h2 className={style.aboutH2}>Sobre Mí</h2>
        <p className={style.aboutP}>
          👨‍💻 Como desarrollador web con experiencia en el desarrollo Frontend y Backend, he trabajado en proyectos desafiantes que exigen un enfoque integral. Mi experiencia más reciente se ha centrado en el uso de tecnologías como Next.js y TypeScript. Esta versatilidad me ha permitido adaptarme a diversos entornos y enfoques. Me llena de energía la idea de ampliar mi perspectiva y aplicar mis destrezas en proyectos innovadores. Busco explorar nuevas oportunidades que me desafíen y permitan mi crecimiento profesional.
        </p>
        <p className={style.aboutP}>
          🎯 Mi objetivo profesional es el crecimiento continuo. Estoy comprometido con la mejora constante y enriquecer mi conjunto de habilidades. Además, busco fortalecer mi competencia en inglés, que considero esencial. Emocionado por integrarme a un equipo donde pueda llevar tanto mi energía como actitud positiva al proyecto.
        </p>
        <p className={style.aboutP}>
          🚀 En busca de encontrar un entorno en el que pueda continuar mi desarrollo profesional y contribuir de manera significativa con mis habilidades y conocimientos. Aspiro a ser parte de un equipo donde pueda marcar la diferencia y afrontar desafíos interesantes. Actualmente, estoy en busca de una oportunidad que me brinde la posibilidad de crecer como profesional y aportar al éxito del equipo o proyecto.
        </p>
      </div>
    </div>
  )
}
