import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from '../components/Projects/Projects'
import Technologies from '../components/technologies/technologies'
import Contact from "../components/Contact/Contact";


export default function page() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}
