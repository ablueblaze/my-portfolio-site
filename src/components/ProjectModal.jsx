import React from 'react';

export default function Project({
  id,
  link,
  title,
  webAlt,
  webImage,
  description,
}) {
  // have the projects be a extensive json file that is imported
  return (
    <div
      id={id}
      className='z-50 -mt-20 absolute left-1/2  opacity-0 float-left transition  ease-in-out duration-700  bg-clip-padding -translate-x-1/2  pointer-events-none
        '>
      <div
        className='z-30  w-full  h-[60vh]  border-2  text-left  bg-black  rounded-3xl  border-solid  overflow-hidden  border-rose-900  md:w-[600px]
          '>
        <a
          href={link}
          className='flex items-center justify-center h-1/2 overflow-hidden bg-[url("./assets/prism-blue-green.png")]'>
          <img
            className='w-10/12 rounded-lg md:w-6/12'
            src={webImage}
            alt={webAlt}
          />
        </a>
        {/* Separation point */}
        <div className='p-2 overflow-scroll border-t-4 border-solid border-zinc-800'>
          <h3 className='text-4xl'>{title}</h3>
          <p className='mt-4'>{description}</p>
        </div>
      </div>
    </div>
  );
}
Project.defaultProps = {
  webImage: 'https://picsum.photos/200/300',
  webAlt: 'random image',
  title: 'Example Project title',
  link: '#',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi.',
};
