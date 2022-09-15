import { useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import siteContent from './data/siteContent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const toggleProject = (e, projectId) => {
    e.preventDefault();
    const projectModal = document.getElementById(projectId);
    projectModal.classList.toggle('opacity-0');
    projectModal.classList.toggle('-translate-y-[30px]');
    projectModal.classList.toggle('pointer-events-none');
  };

  return (
    <div className='container mx-auto w-full text-center'>
      <div id='home'></div>
      <NavBar activePage={currentPage} />
      <Hero id={'hero'} />
      <AboutMe
        contentId='about'
        title={siteContent.about.title}
        text={siteContent.about.description}
      />
      <Projects
        projects={siteContent.projects}
        ProjectModal={ProjectModal}
        toggleProject={toggleProject}
      />
      <div className='pt-96'></div>
      <Footer />
    </div>
  );
}

export default App;
