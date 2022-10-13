import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

//todo: basic error checking
//todo: better "Thanks for contacting me" message
//todo: fix highlighting of text boxes
function ContactForm() {
  const [state, handleSubmit] = useForm('myyvpkbk');
  if (state.succeeded) {
    return (
      <p className='text-center mt-10 text-5xl'>Thanks for reaching out!</p>
    );
  }
  return (
    <>
      <img
        className='w-52 absolute right-0 top-20 md:left-[65%] transform md:-translate-x-1/2 '
        src='assets/undraw_envelope_Yellow.svg'
        alt='envelope'
      />
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-6 grid-rows-6 gap-3 mx-auto md:max-w-3xl w-full text-2xl h-[400px] text-prime-dark mt-20'
        action='https://formspree.io/f/myyvpkbk'
        method='POST'>
        <input
          className='col-span-3 row-start-1 text-2xl  bg-prime-light w-full rounded-3xl focus:outline-prime-accent transition-all ease-linear duration-100 placeholder:text-prime-soft-dark'
          type='text'
          name='Name'
          id='name'
          placeholder='Name'
        />
        <label htmlFor='email'></label>
        <input
          className='col-span-3 row-start-2 text-2xl bg-prime-light w-full rounded-3xl focus:outline-prime-accent transition-all ease-linear duration-100 placeholder:text-prime-soft-dark'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <textarea
          className='col-span-6 row-span-3 text-2xl bg-prime-light rounded-3xl focus:outline-prime-accent transition-all ease-linear duration-100 placeholder:text-prime-soft-dark'
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Message'></textarea>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          className='col-span-2 row-start-6 w-full rounded-3xl bg-prime-light hover:scale-[1.05] hover:bg-prime-accent transition-all duration-100 ease-in-out'
          type='submit'
          disabled={state.submitting}>
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
