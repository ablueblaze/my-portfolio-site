import { useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import GeneralContent from './components/GeneralContent';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const about = {
    title: "It's all about me baby!",
    image: 'https://picsum.photos/200/300',
    alt: 'This is my image',
    contents:
      "Well, Hi! My name's Blaze, and I'm a front end web developer. I've been building small projects for the past two years.",
  };
  const Projects1 = [
    {
      title: 'Project 1',
      image: 'http://placehold.it/350x150',
      alt: 'Project 1',
      contents:
        "This is a project I did for a client. It's a simple website for a local business.",
    },
    {
      title: 'Project 2',
      image: 'http://placehold.it/350x150',
      alt: 'Project 1',
      contents:
        "This is a project I did for a client. It's a simple website for a local business.",
    },
    {
      title: 'Project 3',
      image: 'http://placehold.it/350x150',
      alt: 'Project 1',
      contents:
        "This is a project I did for a client. It's a simple website for a local business.",
    },
  ];
  return (
    <div className='w-full'>
      <div className='sticky top-0 w-full bg-accent-clr z-50'>
        <NavBar activePage={currentPage} />
      </div>
      <Hero />
      <GeneralContent
        textSide='right'
        image={about.image}
        alt={about.alt}
        title={about.title}
        text={about.contents}
      />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
