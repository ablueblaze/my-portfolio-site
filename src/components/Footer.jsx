// footer component with links
import React from 'react';

export default function Footer(props) {
  const { links } = props;
  return (
    <div
      className='absolute left-0 bg-[url("assets/prism.png")] w-full mt-72 '
      id='contact'>
      <div className='  text-text-dark text-center py-4 w-full'>
        <div className='container mx-auto'>
          <h2 className='text-4xl underline mb-4 opacity-90 '>Contact me!</h2>
          <div className='flex flex-row justify-center'>
            {links.map((link) => (
              <a
                key={link.id}
                className='w-10 hover:text-gray-200 mx-4'
                target='_blank'
                href={link.url}>
                <img className='invert' src={link.img} alt={link.alt} />
              </a>
            ))}
          </div>
          <p className='mb-10 max-w-xl mx-auto text-center mt-5'>
            While your travels have brought you here, I find myself wandering
            the far reaches of the web. Forever seeking the next cyber hill
            seeking the next bit of wisdom. If you have any questions, would
            like to work together, or feel up to a virtual coffee to swap
            stories, please feel free to contact me.
          </p>
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
    </div>
  );
}

Footer.defaultProps = {
  links: [
    {
      id: 'email',
      url: 'mailto:blaze@fyxwing.com',
      img: 'assets/at-solid.svg',
      alt: 'Email icon',
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/ABlueBlaze/',
      img: 'assets/twitter-brands.svg',
      alt: 'Twitter Icon',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/blaze-scott-3672b891/',
      img: 'assets/linkedin-brands.svg',
      alt: 'Linkedin Icon',
    },
    {
      id: 'github',
      url: 'https://github.com/ablueblaze',
      img: 'assets/github-brands.svg',
      alt: 'GitHub Icon',
    },
  ],
};
