import React from 'react';
import { nanoid } from 'nanoid';

export default function Projects({ Contents }) {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center mt-1/4% lg:items-start  lg:flex-row md:justify-between lg:max-w-6xl'>
      <h2 className=' pb-16 text-7xl underline' id='projects'>
        Projects
      </h2>
      <div className='mx-auto flex flex-wrap justify-center items-center max-w-5xl'>
        {Contents.projects.map((project) => {
          const currentId = nanoid();
          return (
            <a href={project.demoLink} target='_blank' key={currentId}>
              <img
                className='rounded-3xl shadow-2xl w-44 h-44 object-cover m-4'
                src={project.image}
                alt={project.alt}
                href={project.demoLink}
                target='_blank'
                key={currentId}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
