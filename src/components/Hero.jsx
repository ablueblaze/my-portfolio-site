import React from 'react';

function Hero() {
  return (
    <>
      <div className='flex flex-col mt-20'>
        <h1 className='2xl:text-[11rem] md:text-[10vw] sm:text-[15vw] text-7xl text-prime-light font-bold md:text-left text-center'>
          Blaze Scott
        </h1>
        <h2 className='2xl:text-8xl md:text-[4.5vw] text-5xl text-prime-light md:text-left text-center'>
          Front-end Web Developer
        </h2>
      </div>
      <div className='md:w-4/12 w-10/12 md:mx-auto mx-auto mr-10 rounded-3xl md:rotate-12 overflow-hidden mt-5'>
        <img
          className='md:block hidden rounded-3xl object-cover transition-all ease-linear duration-200'
          src='assets/profile_pic_4-tilted.jpg'
          alt='profile picture of Blaze'
        />
        <img
          className='block md:hidden object-cover w-full transition-all ease-linear duration-200'
          src='assets/Good_Profile_pic.jpg'
          alt='profile picture of Blaze'
        />
      </div>
    </>
  );
}

export default Hero;
