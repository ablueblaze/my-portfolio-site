import React from 'react';

export default function NavBar(props) {
  const { activePage } = props;
  const navBtnActive = (page) => {
    if (activePage === page) {
      return 'border-accent-b';
    }
    return '';
  };

  return (
    <nav className='px-2 sm:px-0 py-2.5 rounded '>
      <div className='container flex justify-between mx-auto'>
        <span className='hidden text-xl md:flex items-center font-semibold whitespace-nowrap '>
          Blaze Scott
        </span>
        <div className='py-3 px-6 space-x-0 md:space-x-10 text-text-light bg-neutral-800 rounded-full '>
          <a
            href='#home'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            Home
          </a>
          <a
            href='#about'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            About
          </a>
          <a
            href='#projects'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            Projects
          </a>
          <a
            href='#contact'
            className='hover:text-accent-clr hover:duration-300 p-4'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
