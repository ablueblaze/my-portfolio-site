import React from 'react';
import { nanoid } from 'nanoid';

export default function Projects({ projects, ProjectModal, toggleProject }) {
  return (
    <div>
      <h2 className='pt-32 pb-16 text-7xl underline' id='projects'>
        Projects
      </h2>
      <div className='mx-auto flex flex-wrap justify-center items-center max-w-5xl'>
        {projects.map((project) => {
          const currentId = nanoid();
          return (
            <div
              key={currentId}
              onMouseEnter={(e) => toggleProject(e, currentId)}
              onMouseLeave={(e) => toggleProject(e, currentId)}>
              <img
                className='rounded-3xl shadow-2xl w-44 h-44 object-cover m-4'
                // className='max-w-full h-auto rounded-full'
                src={project.image}
                alt={project.alt}
              />
              <ProjectModal
                id={currentId}
                title={project.title}
                webImage={project.image}
                webAlt={project.alt}
                link={project.link}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
