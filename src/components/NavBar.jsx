import React from 'react';

export default function NavBar(props) {
  const { activePage } = props;
  const navBtnActive = (page) => {
    if (activePage === page) {
      return 'border-accent-b';
    }
    return '';
  };

  function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    btn.classList.toggle('open');
  }

  return (
    <nav className='relative container py-1 mx-auto md:py-2'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <img
            className='max-w-[80px]'
            src='./src/assets/undraw_hacker_mind_-6-y85.svg'
            alt=''
          />
        </div>
        <div className='hidden md:flex py-3 px-6 rounded-full space-x-6 bg-dark-clr text-text-light'>
          <a href='#' className='hover:text-accent-clr'>
            Home
          </a>
          <a href='#' className='hover:text-accent-clr'>
            About
          </a>
          <a href='#' className='hover:text-accent-clr'>
            Methods
          </a>
          <a href='#' className='hover:text-accent-clr'>
            Projects
          </a>
          <a href='#' className='hover:text-accent-clr'>
            Contact
          </a>
        </div>
        <button
          onClick={toggleMenu}
          id='menu-btn'
          class='block hamburger md:hidden focus:outline-none'>
          <span class='hamburger-top'></span>
          <span class='hamburger-middle'></span>
          <span class='hamburger-bottom'></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
      <div class='md:hidden'>
        <div
          id='menu'
          class='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
          <a href='#' className='hover:text-accent-clr'>
            Home
          </a>
          <a href='#' className='hover:text-accent-clr'>
            About
          </a>
          <a href='#' className='hover:text-accent-clr'>
            Methods
          </a>
          <a href='#' className='hover:text-accent-clr'>
            Projects
          </a>
          <a href='#' className='hover:text-accent-clr'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
