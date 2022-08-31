import React from 'react';

export default function Project(props) {
  // have the projects be a extensive json file that is imported
  const { image, alt, title, description, link } = props;
  return (
    <div className='container mx-auto pb-32 flex flex-col'>
      <a className='' href={link}>
        <img className='' src={image} alt={alt} />
      </a>
      {/* include a slide overlay with the title and tech list */}

      {/* Text content linked to the current shown project */}
      <div>
        <h2 className='text-5xl my-8'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
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
