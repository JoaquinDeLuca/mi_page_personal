import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["200", "400"],
  style: ["normal", "italic"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Joaquin De Luca",
  description:
    "Descubre el trabajo y habilidades de Joaquin en su portafolio personal. Diseño, desarrollo web y más.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Proyectos personales",
    "Desarrollo web",
  ],
  authors: [{ name: "Joaquin De Luca" }],
  generator: "Next.js",
  creator: "Joaquin De Luca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
