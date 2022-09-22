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
      <div className='container flex justify-between items-center mx-auto'>
        <div className='hidden flex items-center md:block'>
          <span className='hidden self-center text-xl md:block font-semibold whitespace-nowrap '>
            Blaze Scott
          </span>
        </div>
        <div className='py-3 px-6 space-x-0 md:space-x-20 text-text-light bg-neutral-800 rounded-full mt-5'>
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
