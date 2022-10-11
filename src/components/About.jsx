import React from 'react';

function About({ aboutMe }) {
  return (
    <div className='flex lg:flex-row lg:max-w-none max-w-xl flex-col items-start justify-between space-x-4 mt-20'>
      <img
        className=' lg:w-1/2'
        src='assets/undraw_lost_online_yellow.svg'
        alt='art of a man on his phone with space swirling around him in the background'
      />
      <article className='lg:w-1/2 lg:mt-0 mt-10'>
        {aboutMe.map((paragraph) => (
          <p className='xl:text-4xl text-3xl text-prime-light indent-6 pb-5'>
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}

export default About;
