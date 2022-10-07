import React from 'react';

function SectionHeader({ title }) {
  return (
    <header className='min-w-[100%] relative flex items-center justify-start overflow-hidden'>
      <h2 className='text-5xl mr-4 text-prime-light font-bold whitespace-nowrap'>
        {title}
      </h2>
      <span className='w-screen border-solid absolute bottom-0 border-2 border-prime-light'></span>
    </header>
  );
}

export default SectionHeader;
