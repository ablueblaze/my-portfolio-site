import React from 'react';

function Carousel({ contents }) {
  return (
    <div className='flex flex-col md:items-start items-center justify-around md:flex-row  flex-wrap'>
      {contents.map((project) => (
        <div className='border-2 border-prime-light rounded-3xl md:max-w-lg md:min-h-[73vh] my-16 flex flex-col items-center text-prime-light'>
          <div className=' sm:px-6 md:px-8 px-2 flex flex-col items-center pb-6'>
            <h1 className='text-4xl mt-4'>{project.title}</h1>
            <img
              className='mt-4 rounded-2xl'
              src={project.image}
              alt={project.alt}
            />
            <div className='w-3/4 flex justify-between text-3xl mt-5 text-prime-dark'>
              <a
                className='bg-prime-light hover:scale-[1.05] hover:bg-prime-accent px-8 py-1 rounded-3xl  transition-all ease-in-out duration-100'
                href={project.repoLink}>
                Repo
              </a>
              <a
                className='bg-prime-light hover:scale-[1.05] hover:bg-prime-accent px-8 py-1 rounded-3xl  transition-all ease-in-out duration-100'
                href={project.demoLink}>
                Demo
              </a>
            </div>
            <p className='w-3/4 text-2xl mt-7'>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
