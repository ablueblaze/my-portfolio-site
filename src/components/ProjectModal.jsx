import React from 'react';

export default function Project(props) {
  // have the projects be a extensive json file that is imported
  const { webImage, webAlt, link, title, description } = props;
  return (
    <div className='md:absolute w-full bg-black z-30 h-[60vh] text-left rounded-3xl overflow-hidden border-8 border-solid border-rose-900 md:w-[600px]'>
      {/* Main container */}
      <a
        href={link}
        className='flex items-center justify-center h-1/2 overflow-hidden'>
        {/* top container for the images */}
        <img className='w-full' src={webImage} alt={webAlt} />
      </a>
      <div className='p-2 overflow-scroll border-t-4 border-solid border-zinc-800'>
        {/* bottom container for the text */}
        <h3 className='text-4xl'>{title}</h3>
        <p className='mt-4'>{description}</p>
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
