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
        <header className='max-w-[1700px] md:flex md:justify-between w-full md:mt-32  mt-0 md:px-8 sm:px-6 px-2 transition-all ease-linear duration-200'>
          <div className='flex flex-col mt-20'>
            <h1 className='2xl:text-[11rem] md:text-[10vw] sm:text-[15vw] text-7xl text-prime-light font-bold md:text-left text-center'>
              Blaze Scott
            </h1>
            <h2 className='2xl:text-8xl md:text-[4.5vw] text-5xl text-prime-light md:text-left text-center'>
              Front-end Web Developer
            </h2>
          </div>
          <div className='md:w-4/12 w-10/12 md:mx-auto mx-auto mr-10 rounded-3xl md:rotate-12 overflow-hidden mt-5'>
            <img
              className='md:block hidden rounded-3xl object-cover transition-all ease-linear duration-200'
              src='assets/profile_pic_4-tilted.jpg'
              alt='profile picture of Blaze'
            />
            <img
              className='block md:hidden object-cover w-full transition-all ease-linear duration-200'
              src='assets/Good_Profile_pic.jpg'
              alt='profile picture of Blaze'
            />
          </div>
        </header>
        <section
          className='container w-full mt-32 flex flex-col items-center'
          id='about'>
          <SectionHeader title={'About'} />
          <div className='flex lg:flex-row lg:max-w-none max-w-xl flex-col items-start justify-between space-x-4 mt-20'>
            <img
              className=' lg:w-1/2'
              src='assets/undraw_lost_online_yellow.svg'
              alt='art of a man on his phone with space swirling around him in the background'
            />
            <article className='lg:w-1/2 lg:mt-0 mt-10'>
              {contents.aboutMe.map((paragraph) => (
                <p className='xl:text-4xl text-3xl text-prime-light indent-6 pb-5'>
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
              <div className='flex flex-col items-center justify-between mt-24'>
                <h3 className='text-4xl underline text-prime-light'>
                  {skill.title}
                </h3>
                <div className='flex items-center space-x-6 mt-6'>
                  {skill.icons.map((icon) => (
                    <div className='relative flex flex-col justify-center items-center'>
                      <img
                        src={icon.url}
                        alt={icon.name}
                        className='max-w-[90px] lg:w-[7vw] w-[10vw]'
                      />
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
        <section id='contact' className='container w-full mt-32 relative'>
          <SectionHeader title={'Contact'} />
          <img
            className='w-52 absolute right-0 top-20 md:left-[65%] transform md:-translate-x-1/2 '
            src='assets/undraw_envelope_Yellow.svg'
            alt='envelope'
          />
          <form
            className='grid grid-cols-6 grid-rows-6 gap-3 mx-auto md:max-w-3xl w-full text-2xl h-[400px] text-prime-dark mt-20'
            action='#'>
            <input
              className='col-span-3 row-start-1 text-2xl  bg-prime-light w-full rounded-3xl'
              type='text'
              name='Name'
              id='name'
              placeholder='Name'
            />
            <input
              className='col-span-3 row-start-2 text-2xl bg-prime-light w-full rounded-3xl'
              type='email'
              name='email'
              id='email'
              placeholder='Email'
            />
            <textarea
              className='col-span-6 row-span-3 text-2xl bg-prime-light rounded-3xl'
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Message'></textarea>
            <button
              className='col-span-2 row-start-6 w-full rounded-3xl bg-prime-light'
              type='submit'>
              Submit
            </button>
          </form>
        </section>
        <footer className='bg-footer-bg min-w-full h-20 mt-52'></footer>
      </main>
    </div>
  );
}

export default App;
