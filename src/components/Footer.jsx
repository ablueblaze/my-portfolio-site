import React from 'react';

function Footer() {
  return (
    <div className='container flex md:flex-row flex-col items-center justify-between'>
      <div className='flex pt-2'>
        <a href='https://github.com/ablueblaze'>
          <img
            className='w-12 m-2 invert'
            src='assets/github-brands.svg'
            alt='github logo'
          />
        </a>
        <a href='https://www.linkedin.com/in/blaze-scott-3672b891/'>
          <img
            className='w-12 m-2 invert'
            src='assets/linkedin-brands.svg'
            alt='linkedin logo'
          />
        </a>
      </div>
      <p className='pb-4'>Created by: Blaze Scott</p>
    </div>
  );
}

export default Footer;
