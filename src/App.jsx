import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import './index.css';
import contents from './data/contents.json';
import NavBar from './components/NavBar';

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
        <header className='md:flex md:justify-between w-full md:mt-40  mt-20 md:px-8 sm:px-6 px-2 transition-all ease-linear duration-200'>
          <div className='flex flex-col lg:mt-32 md:mt-20'>
            <h1 className='xl:text-[12rem] text-8xl text-prime-light font-bold md:text-left text-center'>
              Blaze Scott
            </h1>
            <h2 className='xl:text-8xl xl:pl-2 pl-1 md:text-4xl text-5xl text-prime-light md:text-left text-center'>
              Full Stack Developer
            </h2>
          </div>
          <div className='md:w-8/12 xl:w-4/12 xl:mr-20 mr-10 w-full rounded-3xl md:rotate-12 overflow-hidden mt-5'>
            <img
              className='md:block hidden object-cover transition-all ease-linear duration-200'
              src='assets/profile_pic_4-tilted.jpg'
              alt='profile picture of Blaze'
            />
            <img
              className='block md:hidden object-cover  transition-all ease-linear duration-200'
              src='assets/Good_Profile_pic.jpg'
              alt='profile picture of Blaze'
            />
          </div>
        </header>
        <section id='about' className='container w-full mt-32'>
          <div className='min-w-[100%] relative flex items-center justify-start overflow-hidden'>
            <h2 className='text-4xl mr-4 text-prime-light font-bold whitespace-nowrap'>
              About Me
            </h2>
            {/* todo: Get the line to the bottom of the div */}
            <span className='w-screen border-solid absolute bottom-0 right-0 border-2 border-prime-light'></span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
