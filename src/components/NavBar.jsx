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
      </div>
    </nav>
  );
}
