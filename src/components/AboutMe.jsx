// General content component with image and text
import React from 'react';

export default function AboutMe(props) {
  const { title, text } = props;
  return (
    <div className='container mx-auto pb-32 flex flex-col pt-32' id='about'>
      <img
        className=' object-cover max-w-xl rounded-full'
        src='src/assets/Good_Profile_pic.jpg'
        alt='picture of Blaze'
      />
      <div>
        <h2 className='text-5xl my-8'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
