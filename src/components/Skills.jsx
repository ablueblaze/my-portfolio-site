import React from 'react';
import { nanoid } from 'nanoid';

//todo: force images to stay inside the container
function Skills({ skills }) {
  return (
    <article>
      {skills.map((skill) => (
        <div
          key={nanoid()}
          className='flex flex-col items-center justify-between mt-24'>
          <h3 className='text-4xl underline text-prime-light'>{skill.title}</h3>
          <div className='container flex items-center justify-center space-x-6 mt-6 '>
            {skill.icons.map((icon) => (
              <div
                key={nanoid()}
                className='relative flex flex-col justify-center items-center'>
                <img
                  src={icon.url}
                  alt={icon.name}
                  className='max-w-[90px] lg:w-[7vw] w-[10vw]'
                />
                <p className=' absolute text-xl text-center font-bold pt-20 w-24 bottom-0 opacity-0 hover:opacity-100 hover:-bottom-9 transition-all ease-in-out duration-500'>
                  {icon.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
  );
}

export default Skills;
