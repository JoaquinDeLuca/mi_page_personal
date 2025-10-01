import Link from "next/link";
import expData from "./exp.json";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Mi trayectoria en desarrollo</p>
      {expData.map((exp) => (
        <div key={exp.id} className={styles.containerExp}>
          <div className={styles.info}>
            <span className={styles.pin}></span>
            <h3>{exp.position}</h3>
            <h4>{exp.place}</h4>
            <p>{exp.date}</p>
          </div>
          <div className={styles.description}>
            <p>{exp.description}</p>
            {exp.link && (
              <Link className={styles.link} href={exp.link} target="_blank">
                Ver más
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
