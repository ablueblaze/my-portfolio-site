import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteContent from './data/siteContent';
// const siteContent = require('./json/siteContent.json');

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className='container mx-auto w-full text-center'>
      <NavBar activePage={currentPage} />
      <Hero />
      <AboutMe
        contentId='about'
        title={siteContent.about.title}
        text={siteContent.about.description}
      />
      <h2 className='mt-10' id='projects'>
        Projects
      </h2>
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
