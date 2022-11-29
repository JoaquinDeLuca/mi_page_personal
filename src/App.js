import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Proyects from './components/Projects/Proyects';
import Technologies from './components/technologies/technologies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header/>
        <Home/>
        <About/>
        <Proyects/>
        <Technologies />
        <Contact />
      <Footer/>
    </>
  );
}

export default App;
