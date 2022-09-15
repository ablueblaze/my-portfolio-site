import { useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import siteContent from './data/siteContent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className='container mx-auto w-full text-center'>
      <div id='home'></div>
      <NavBar activePage={currentPage} />
      <Hero id={'hero'} />
      <AboutMe contentId='about' />
      <Projects projects={siteContent.projects} />
      <div className='pt-96'></div>
      <Footer />
    </div>
  );
}

export default App;
