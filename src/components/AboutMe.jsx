// General content component with image and text
import React from 'react';

export default function AboutMe(props) {
  const { title, text } = props;
  return (
    <div
      className='container mx-auto  flex flex-col justify-center items-center pb-32 flex flex-col pt-32'
      id='about'>
      <img
        className=' object-cover max-w-full lg:max-w-xl rounded-full'
        src='assets/Good_Profile_pic.jpg'
        alt='picture of Blaze'
      />
      <div className='my-8 max-w-xl'>
        <h2 className='text-5xl '>{title}</h2>
        <p className='mt-6 text-left mx-auto'>{text}</p>
      </div>
    </div>
  );
}
