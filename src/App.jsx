import { useState } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className='App'>
      <NavBar activePage={currentPage} />
      <Hero />
    </div>
  );
}

export default App;
