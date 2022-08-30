// General content component with image and text
import React from 'react';

export default function GeneralContent(props) {
  const { image, alt, title, text, textSide, contentId } = props;
  return (
    <div
      className={`container mx-auto pb-32 flex flex-col pt-32 ${
        textSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      id={contentId}>
      <img className='h-auto' src={image} alt={alt} />
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
