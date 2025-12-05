import style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <p>© {year} - Creando, Creciendo, Conquistando - Joaquin De Luca </p>
    </footer>
  );
}
