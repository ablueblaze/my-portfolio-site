// footer component with links
import React from 'react';

export default function Footer(props) {
  const { links } = props;
  return (
    <div className='bg-gray-400 text-text-dark text-center py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-center'>
          {links.map((link) => (
            <a
              key={link.id}
              className='w-10 hover:text-gray-200 mx-4'
              target='_blank'
              href={link.url}>
              <img src={link.img} alt={link.alt} />
            </a>
          ))}
        </div>
        <p className='py-4  text-xs'>
          &copy;2022 by Blaze Scott. All rights reserved.
        </p>
        <a
          href='https://github.com/ablueblaze/my-portfolio-site'
          target='_blank'>
          <p className='py-4 text-xs'>Checkout the code here.</p>
        </a>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  links: [
    {
      id: 'email',
      url: 'mailto:blaze@fyxwing.com',
      img: './src/assets/at-solid.svg',
      alt: 'Email icon',
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/ABlueBlaze/',
      img: './src/assets/twitter-brands.svg',
      alt: 'Twitter Icon',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/blaze-scott-3672b891/',
      img: './src/assets/linkedin-brands.svg',
      alt: 'Linkedin Icon',
    },
    {
      id: 'github',
      url: 'https://github.com/ablueblaze',
      img: './src/assets/github-brands.svg',
      alt: 'GitHub Icon',
    },
  ],
};
