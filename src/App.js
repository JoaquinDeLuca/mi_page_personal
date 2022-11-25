import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Proyects from './components/Projects/Proyects';
import Technologies from './components/technologies/technologies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Layout>
      <Home/>
      <About/>
      <Proyects/>
      <Technologies />
      <Contact />
    </Layout>
    </>
  );
}

export default App;
