// footer component with links
import React from 'react';

export default function Footer(props) {
  const { links } = props;
  return (
    <div className='bg-light-clr text-gray-400 text-center py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-center'>
          {links.map((link) => (
            <a
              key={link.id}
              className='w-10 hover:text-gray-200 mx-4'
              href={link.url}>
              <img src={link.img} alt={link.alt} />
            </a>
          ))}
        </div>
        <p className='py-4 text-gray-400 text-xs'>
          &copy;2022 by Blaze Scott. All rights reserved.
        </p>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  links: [
    {
      id: 'email',
      url: '#',
      img: './src/assets/at-solid.svg',
      alt: '#',
    },
    {
      id: 'twitter',
      url: '#',
      img: './src/assets/twitter-brands.svg',
      alt: '#',
      text: 'About',
    },
    {
      id: 'linkedin',
      url: '#',
      img: './src/assets/linkedin-brands.svg',
      alt: '#',
      text: 'Contact',
    },
    {
      id: 'github',
      url: '#',
      img: './src/assets/github-brands.svg',
      alt: '#',
      text: 'Contact',
    },
  ],
};
