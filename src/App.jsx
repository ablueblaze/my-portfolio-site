import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import './index.css';
import contents from './data/contents.json';
import NavBar from './components/NavBar';
import SectionHeader from './components/SectionHeader';

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
          <SectionHeader title={'About'} />
          <div className='flex items-start justify-between space-x-4 mt-20'>
            <img
              className=' w-1/2'
              src='assets/undraw_lost_online_yellow.svg'
              alt='art of a man on his phone with space swirling around him in the background'
            />
            <article className=' w-1/2'>
              {contents.aboutMe.map((paragraph) => (
                <p className='text-xl text-prime-light indent-6 pb-5'>
                  {paragraph}
                </p>
              ))}
            </article>
          </div>
        </section>
        <section id='projects' className='container w-full mt-32'>
          <SectionHeader title={'Projects'} />
          {/* image carousel */}
        </section>
        <section id='skills' className='container w-full mt-32'>
          <SectionHeader title={'Skills'} />
          <article>
            {contents.skills.map((skill) => (
              <div className='flex flex-col items-center justify-between mt-16'>
                <h3 className='text-3xl underline text-prime-light'>
                  {skill.title}
                </h3>
                <div className='flex items-center space-x-6 mt-6'>
                  {skill.icons.map((icon) => (
                    <div className='relative flex flex-col justify-center items-center'>
                      <img src={icon.url} alt={icon.name} className='w-20' />
                      <p className=' absolute text-xl text-center font-bold pt-20 w-24 bottom-0 opacity-0 hover:opacity-100 hover:-bottom-9 transition-all ease-in-out duration-500'>
                        {icon.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </section>
        <footer className='bg-footer-bg min-w-full h-20 mt-52'></footer>
      </main>
    </div>
  );
}

export default App;
