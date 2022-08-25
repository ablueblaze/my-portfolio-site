import React, { useEffect } from 'react';

export default function NavBar() {
  const [colors, setColors] = useEffect({
    accent: '#00F0DA',
  });
  return (
    <div className='flex justify-between items-center m-6'>
      <a href='#'>
        <img
          className='w-40'
          src='./src/assets/undraw_hacker_mind_-6-y85.svg'
          alt=''
        />
      </a>
      <nav className='bg-gray-500 p-4'>
        <ul className='flex flex-row'>
          <li className='pl-3 pr-3'>Home</li>
          <li className='pl-3 pr-3'>About</li>
          <li className='pl-3 pr-3'>Methods</li>
          <li className='pl-3 pr-3'>Projects</li>
          <li className='pl-3 pr-3'>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
