import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';
import siteContent from './data/siteContent';
import { nanoid } from 'nanoid';

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
      <h2 className='pt-32 pb-16 text-7xl underline' id='projects'>
        Projects
      </h2>
      <div className='mx-auto flex flex-wrap justify-center items-center max-w-5xl'>
        {siteContent.projects.map((project) => {
          return (
            <Project
              key={nanoid()}
              image={project.image}
              alt={project.alt}
              link={project.link}
            />
          );
        })}
      </div>
      <h2 className='text-4xl underline mb-4 opacity-90 mt-96'>Contact me!</h2>
      <p className='mb-10 max-w-xl mx-auto text-left'>
        While your travels have brought you here, I find myself wandering the
        far reaches of the web. Forever seeking the next cyber hill seeking the
        next bit of wisdom. If you have any questions, would like to work
        together, or feel up to a virtual coffee to swap stories, please feel
        free to contact me.
      </p>
      <div className='absolute left-0 bg-gray-700 w-full  ' id='contact'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
