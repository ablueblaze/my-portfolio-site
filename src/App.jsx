import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import contents from './data/contents.json';

function App() {
  return (
    <div className='container mx-auto'>
      <NavBar />
      <Hero />
      <AboutMe Contents={contents} />
      <Projects Contents={contents} />
      <Footer links={contents.footer.links} blurb={contents.footer.blurb} />
    </div>
  );
}

export default App;
