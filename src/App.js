import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Proyects from './components/Projects/Projects';

function App() {
  return (
    <>
    <Layout>
      <Home/>
      <About/>
      <Proyects/>
    </Layout>
    </>
  );
}

export default App;
