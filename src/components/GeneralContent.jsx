// General content component with image and text
import React from 'react';

export default function GeneralContent(props) {
  const { image, alt, title, text, textSide } = props;
  return (
    <div
      className={`container mx-auto min-h-full pb-32 flex flex-col md:px-1/4-w-screen md:space-x-20 ${
        textSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}>
      <img className='max-w-full h-auto' src={image} alt={alt} />
      <div>
        <h2 className='text-5xl my-8'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

GeneralContent.defaultProps = {
  image: 'https://picsum.photos/200/300',
  alt: 'random image',
  textSide: 'right',
  title: 'Example title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod aliquet nisi nisi euismod nisi. Duis euismod, nisi eget consectetur consectetur, nisi nisi ultricies nisi, euismod al',
};
