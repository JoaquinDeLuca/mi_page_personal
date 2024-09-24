import Home from "../components/Home/Home";
import About from "../components/About/About";
import Technologies from '../components/technologies/technologies'
import Contact from "../components/Contact/Contact";
import Tabs from "src/components/Tabs/Tabs";


export default function page() {
  return (
    <>
      <Home />
      <About />
      <Tabs />
      <Technologies />
      <Contact />
    </>
  );
}
