import React from 'react';
import { nanoid } from 'nanoid';

// todo: Apply transition effects to the mobile menu
function NavBar({ currentPage, setCurrentPage, navOptions }) {
  let mobileMenuClosed = true;
  function toggleDropDown() {
    const navList = document.getElementById('nav-list');
    if (mobileMenuClosed) {
      navList.classList.add('opacity-100'), navList.classList.remove('-z-10');
      mobileMenuClosed = false;
      return;
    } else {
      navList.classList.remove('opacity-100'),
        navList.classList.add('-z-10'),
        (mobileMenuClosed = true);
    }
  }
  return (
    <nav className='container md:pt-4 text-lg flex justify-end'>
      <span
        onClick={() => toggleDropDown()}
        className='cursor-pointer mt-4 mx-2 md:hidden block'>
        <img
          onClick={() => console.log('clicked')}
          id='menu-icon'
          className='h-10 '
          src='assets/bars-solid.svg'
          alt='nav menu icon'
        />
      </span>
      <ul
        id='nav-list'
        className='md:flex md:z-auto md:static absolute bg-prime-dark w-full rounded-3xl left-0 pl-7 md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-0 -z-10 '>
        <span
          onClick={() => toggleDropDown()}
          className='cursor-pointer  md:hidden block absolute top-6 right-12'>
          <img
            onClick={() => console.log('clicked')}
            id='menu-icon'
            className='h-10 '
            src='assets/x-solid.svg'
            alt='nav menu icon'
          />
        </span>
        {navOptions.map((option) => (
          <li className={`px-3 my-6 md:my-0`} key={nanoid()}>
            <a
              onClick={() => {
                setCurrentPage(option.id);
                toggleDropDown();
              }}
              className={`text-prime-light lg:text-2xl text-xl hover:text-prime-accent transition-all ease-linear duration-300  ${
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
