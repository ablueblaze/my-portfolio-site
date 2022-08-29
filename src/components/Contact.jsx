import React from 'react';

export default function Contact() {
  return (
    <div className='container mx-auto space-y-10 mb-20'>
      <h2 className='text-5xl'>Contact Title Example</h2>
      <form action='#' className='flex flex-col space-y-2'>
        <input
          className='border-2 border-gray-300 p-4 rounded-lg resize-none'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
        />
        <input
          className='border-2 border-gray-300 p-4 rounded-lg resize-none'
          type='email'
          name='email'
          id='email'
          placeholder='Email@email.com'
        />
        <textarea
          className='border-2 border-gray-300 p-4 rounded-lg resize-none'
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Message'></textarea>
        <button
          className='border-2 border-dark-clr bg-dark-clr text-text-light p-4 rounded-lg resize-none transition duration-200 ease-in-out hover:bg-accent-clr hover:border-accent-clr'
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
