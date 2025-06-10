import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about} id="about">
      <div className={style.aboutContainer}>
        <h2 className={style.aboutH2}>Sobre Mí</h2>
        <p className={style.aboutP}>
          👨‍💻 Desarrollador Full Stack con especialización en Frontend, enfocado
          en crear interfaces intuitivas que priorizan la experiencia del
          usuario y desarrollar proyectos escalables. Tengo experiencia en
          proyectos desafiantes, trabajando tanto en equipo como en forma
          individual, utilizando principalmente React, Next.js y TypeScript. Me
          destaco en proponer mejoras técnicas, optimizar y colaborar
          activamente con los diferentes roles del equipos para lograr productos
          sólidos.
        </p>
        <p className={style.aboutP}>
          🎯 Mi meta profesional es seguir creciendo, fortaleciendo mis
          habilidades actuales, aprendiendo nuevas tecnologías y mejorando mi
          dominio del inglés. Valoro especialmente los entornos colaborativos,
          donde se promueve el aprendizaje mutuo y cada rol contribuye al
          desarrollo del producto.
        </p>
        <p className={style.aboutP}>
          🚀 Estoy abierto a nuevas oportunidades que me permitan seguir
          desarrollándome, asumir responsabilidades y contribuir con soluciones
          que realmente marquen la diferencia en el equipo y en el producto.
        </p>
      </div>
    </div>
  );
}
