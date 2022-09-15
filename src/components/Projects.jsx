import React from 'react';
import { nanoid } from 'nanoid';

export default function Projects({ projects }) {
  return (
    <div>
      <h2 className='pt-32 pb-16 text-7xl underline' id='projects'>
        Projects
      </h2>
      <div className='mx-auto flex flex-wrap justify-center items-center max-w-5xl'>
        {projects.map((project) => {
          const currentId = nanoid();
          return (
            <a href={project.link} target='_blank' key={currentId}>
              <img
                className='rounded-3xl shadow-2xl w-44 h-44 object-cover m-4'
                src={project.image}
                alt={project.alt}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
