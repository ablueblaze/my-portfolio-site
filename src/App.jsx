import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import './index.css';
import contents from './data/contents.json';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Carousel from './components/Carousel';
import Skills from './components/Skills';
import Footer from './components/Footer';
import SectionHeader from './components/SectionHeader';

//todo: dynamic background
//todo: touchup design
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className='min-h-screen bg-gradient-to-b from-gradient-top to-gradient-bottom'>
      <main id='home' className='min-w-full flex flex-col items-center'>
        <NavBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          navOptions={contents.navOptions}
        />
        <header className='max-w-[1700px] md:flex md:justify-between w-full md:mt-32  mt-0 md:px-8 sm:px-6 px-2 transition-all ease-linear duration-200'>
          <Hero />
        </header>
        <section
          className='container w-full mt-32 flex flex-col items-center'
          id='about'>
          <SectionHeader title={'About'} />
          <About aboutMe={contents.aboutMe} />
        </section>
        <section id='projects' className='container w-full mt-32'>
          <SectionHeader title={'Projects'} />
          {/* image carousel */}
          <Carousel contents={contents.projects} />
        </section>
        <section id='skills' className='container w-full mt-32'>
          <SectionHeader title={'Skills'} />
          <Skills skills={contents.skills} />
        </section>
        <section id='contact' className='container w-full mt-32 relative'>
          <SectionHeader title={'Contact'} />
          <ContactForm />
        </section>
        <footer className='bg-footer-bg min-w-full h-32 mt-52 flex justify-center items-center '>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
