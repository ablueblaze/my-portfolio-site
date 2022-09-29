import React from 'react';

export default function NavBar() {
  return (
    <nav className='px-2 sm:px-0 py-2.5 rounded '>
      <div className='container flex justify-between mx-auto'>
        <img
          //todo: small logo goes here
          href='assets/undraw_developer_activity_#7666FF.svg'
          alt='logo'
          className='md:flex items-center font-semibold whitespace-nowrap '
        />

        <ul className='list-none flex px-2 space-x-0 md:space-x-10 text-text-light bg-neutral-800 rounded-full '>
          <a
            href='#home'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            <li>Home</li>
          </a>
          <a
            href='#about'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            <li>About</li>
          </a>
          <a
            href='#projects'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            <li>Projects</li>
          </a>
          <a
            href='#contact'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
