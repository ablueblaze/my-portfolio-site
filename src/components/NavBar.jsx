import React from 'react';
import { nanoid } from 'nanoid';

// todo: Apply transition effects to the mobile menu
// todo: Add accessibility features
function NavBar({ currentPage, setCurrentPage, navOptions }) {
  const toggleDropDown = (action) => {
    const navList = document.getElementById('nav-list');
    if (action === 'open') {
      navList.classList.remove('opacity-0'),
        navList.classList.add('opacity-100'),
        navList.classList.remove('pointer-events-none');
      return;
    } else {
      navList.classList.remove('opacity-100'),
        navList.classList.add('opacity-0'),
        navList.classList.add('pointer-events-none');
      return;
    }
  };
  return (
    <nav className='container md:pt-4 text-lg flex justify-end'>
      <div className='mt-4 md:hidden md:pointer-events-none block'>
        <img
          onClick={() => toggleDropDown('open')}
          id='menu-icon'
          className='h-10 cursor-pointer invert'
          src='assets/bars-solid.svg'
          alt='nav menu icon'
        />
      </div>
      <ul
        id='nav-list'
        className='md:flex md:static absolute md:bg-inherit bg-nav-mobile-bg w-full rounded-3xl left-0 pl-7 md:w-auto md:py-0 md:pl-0 opacity-0 md:opacity-100 md:pointer-events-auto pointer-events-none'>
        <div
          onClick={() => toggleDropDown('close')}
          className='cursor-pointer md:hidden md:pointer-events-none block absolute top-6 right-12'>
          <img
            id='menu-icon'
            className='h-10 invert'
            src='assets/x-solid.svg'
            alt='nav menu icon'
          />
        </div>
        {navOptions.map((option) => (
          <li className={`px-3 my-6 md:my-0`} key={nanoid()}>
            <a
              onClick={() => {
                setCurrentPage(option.id);
                toggleDropDown();
              }}
              className={`text-prime-light lg:text-4xl text-xl hover:text-prime-accent transition-all ease-linear duration-300 cursor-pointer ${
                //todo: find a way to make the transition smoother
                currentPage === option.id ? 'text-prime-accent' : ''
              }`}
              href={option.url}>
              {option.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
