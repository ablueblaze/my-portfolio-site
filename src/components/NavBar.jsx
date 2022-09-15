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
    // <nav className='relative container py-1 mx-auto md:py-2'>
    <nav className='sticky top-0 w-full z-50 flex justify-center items-center '>
      <div className='py-3 px-6 space-x-1 md:space-x-20 text-text-light bg-neutral-800 rounded-full mt-5'>
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
    </nav>
  );
}
