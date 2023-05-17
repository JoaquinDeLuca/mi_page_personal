import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from '../components/Projects/Projects'
import Technologies from '../components/technologies/technologies'
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";


export default function index() {
  return (
    <>
      <Header />
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      <Footer />
    </>
  );
}
