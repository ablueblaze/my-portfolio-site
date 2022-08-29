import React from 'react';

export default function Projects(props) {
  // have the projects be a extensive json file that is imported
  const { projects, image, alt, title, text } = props;
  return (
    <div className='container mx-auto pb-32 flex flex-col'>
      {/* Carousel of projects */}
      <img className='h-auto' src={image} alt={alt} />

      {/* Text content linked to the current shown project */}
      <div>
        <h2 className='text-5xl my-8'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

Projects.defaultProps = {
  image: 'https://picsum.photos/200/300',
  alt: 'random image',
  title: 'Example Project title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod al',
};
