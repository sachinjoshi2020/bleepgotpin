import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import shopbelt from '../assets/images/shopbelt.png';
import create from '../assets/images/create.png';
import avtar from '../assets/images/avtar.png';

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  useEffect(() => {
    // Animate the image of the shopbelt
    gsap.fromTo(
      '.animate-shopbelt',
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.animate-shopbelt',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate the create image (floating effect)
    gsap.fromTo(
      '.animate-create',
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.animate-create',
          start: 'top 75%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate the avatar image (floating effect)
    gsap.fromTo(
      '.animate-avtar',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.animate-avtar',
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate the text content (fade and move effect)
    gsap.fromTo(
      '.animate-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.animate-text',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Animate the button (scale effect)
    gsap.fromTo(
      '.animate-button',
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.animate-button',
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-between relative" style={{ background: "#FFE2EB" }}>
      <div className="relative flex justify-center">
        <img src={shopbelt} className="w-[700px] h-screen object-cover animate-shopbelt" alt="" />

        {/* Create image */}
        <div className="w-96 flex justify-center items-center h-96 bottom-40 left-1 absolute animate-create">
          <img src={create} className="w-48 rounded-full object-cover" alt="" />
        </div>

        {/* Avatar image */}
        <div className="w-24 h-24 flex justify-center items-center bottom-44 left-16 absolute overflow-hidden animate-avtar">
          <img src={avtar} className="w-full h-full rounded-full object-cover" alt="" />
        </div>
      </div>

      <div className="w-[660px] flex gap-5 flex-col items-center animate-text">
        <h1 className="text-center text-6xl font-bold text-[#C32F00]">
          See it, make it, <br /> try it, do it
        </h1>

        <p className="text-center text-2xl text-[#C32F00]">
          The best part of BleepGoT is discovering <br /> new things and ideas from people <br /> around the world.
        </p>

        {/* Explore Button */}
        <button className="px-9 py-5 w-40 bg-red-700 text-white rounded-full hover:bg-red-800 animate-button">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Discover;
