import React from 'react';

export default function Content({ id, contents }) {
  return (
    <section className='container mx-auto pt-8 bg-white dark:bg-gray-900 h-3/4 xl:flex xl:justify-center'>
      {' '}
      <div className='grid max-w-screen-xl px-0 py-0 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='order-2  mr-auto place-self-center lg:order-1 lg:col-span-7'>
          <h2 className='max-w-2xl mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            {contents.title}
          </h2>
          {contents.paragraphs.map((paragraph) => {
            return (
              <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
