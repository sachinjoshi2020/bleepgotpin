import React, { useEffect } from 'react';
import gsap from 'gsap';
import img from '../assets/images/cards/one.jpg'
import two from '../assets/images/cards/two.jpg'
import three from '../assets/images/cards/three.jpg'
const Business = () => {
  useEffect(() => {
    // GSAP animation for the title
    gsap.fromTo(
      '.title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    );

    // GSAP animations for the grid items
    gsap.fromTo(
      '.grid-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2, // Adds a delay between each grid item
      }
    );
  }, []);

  return (
    <div className='flex justify-center items-center flex-col gap-16 pb-10'>
      <h1 className='text-5xl font-bold text-center mt-10 opacity-60 title'>
        Grow your business on <br /> Bleepgot
      </h1>

      <div
        className='grid gap-5 w-[900px]'
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: '300px 300px',
        }}
      >
        <div
          className='bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-3xl grid-item overflow-hidden'
          style={{ borderTopLeftRadius: '150px' }}
        >
          <img src={img} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl grid-item overflow-hidden'>
          <img src={two} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl grid-item overflow-hidden'>
        <img src={three} alt=""className='w-full h-full object-cover' />
        </div>
        <div
          className='bg-gradient-to-r from-sky-100 to-indigo-100 rounded-3xl grid-item overflow-hidden'
          style={{ borderBottomRightRadius: '150px' }}
        >
          <img src={three} alt=""className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Business;
