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
    <div className='min-h-screen bg-gradient-to-b from-gradient-top to-gradient-bottom '>
      <main
        id='home'
        className='container min-w-full flex flex-col items-center justify-center'>
        <NavBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          navOptions={contents.navOptions}
        />
        <header className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-8xl text-prime-light font-bold text-left '>
              Blaze Scott
            </h1>
            <h2 className='text-5xl text-prime-light text-left'>
              Full Stack Developer
            </h2>
          </div>
          <img className='' src='#' alt='profile picture of Blaze' />
        </header>
      </main>
    </div>
  );
}

export default App;
