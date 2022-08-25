import React from 'react';

export default function NavBar(props) {
  const { activePage } = props;
  return (
    <div className='flex justify-between items-center m-6'>
      <a href='#'>
        <img
          className='w-40'
          src='./src/assets/undraw_hacker_mind_-6-y85.svg'
          alt=''
        />
      </a>
      <nav className='bg-gray-300 p-4 rounded-xl'>
        <ul className='flex flex-row'>
          <li
            className={`${
              activePage === 'home' ? 'border-accent-b' : ''
            } nav-button`}>
            Home
          </li>
          <li
            className={`${
              activePage === 'about' ? 'border-accent-b' : ''
            } nav-button`}>
            About
          </li>
          <li
            className={`${
              activePage === 'methods' ? 'border-accent-b' : ''
            } nav-button`}>
            Methods
          </li>
          <li
            className={`${
              activePage === 'projects' ? 'border-accent-b' : ''
            } nav-button`}>
            Projects
          </li>
          <li
            className={`${
              activePage === 'contacts' ? 'border-accent-b' : ''
            } nav-button`}>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
