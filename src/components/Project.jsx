import React from 'react';

export default function Project(props) {
  // have the projects be a extensive json file that is imported
  const { image, alt, link, title, description } = props;
  return (
    <>
      {/* <a className='red-border' href={link}> */}
      {/* the image card */}
      <img
        className='rounded-3xl shadow-2xl w-44 h-44 object-cover m-4'
        // className='max-w-full h-auto rounded-full'
        src={image}
        alt={alt}
      />
      {/* </a> */}
    </>
  );
}

Project.defaultProps = {
  image: 'https://picsum.photos/200/300',
  alt: 'random image',
  title: 'Example Project title',
  link: '#',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi.',
};
