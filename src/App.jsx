import { useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import GeneralContent from './components/GeneralContent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className=''>
      <div className='sticky top-0 w-full bg-accent-clr z-50'>
        <NavBar activePage={currentPage} />
      </div>
      <Hero />
      <GeneralContent textSide='right' />
      <GeneralContent textSide='left' />
    </div>
  );
}

export default App;
