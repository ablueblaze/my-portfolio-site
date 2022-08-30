import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import GeneralContent from './components/GeneralContent';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteContent from './data/siteContent';
// const siteContent = require('./json/siteContent.json');

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [Projects, setProjects] = useState([]);

  return (
    <div className='w-full'>
      <div className='sticky top-0 w-full z-50'>
        <NavBar activePage={currentPage} />
      </div>
      <Hero />
      <GeneralContent
        contentId='about'
        textSide='right'
        image={siteContent.about.image}
        alt={siteContent.about.alt}
        title={siteContent.about.title}
        text={siteContent.about.description}
      />
      {siteContent.projects.map((project) => {
        return [
          <Project
            image={project.image}
            alt={project.alt}
            title={project.title}
            description={project.description}
            link={project.link}
          />,
        ];
      })}
      {Projects}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
