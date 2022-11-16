import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Proyects from './components/Projects/Projects';
import Technologies from './components/technologies/technologies';

function App() {
  return (
    <>
    <Layout>
      <Home/>
      <About/>
      <Proyects/>
      <Technologies />
    </Layout>
    </>
  );
}

export default App;
