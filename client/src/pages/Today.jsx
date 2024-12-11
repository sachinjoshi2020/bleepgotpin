import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin
import Todaycp from '../components/Todaycp';
import fl from '../assets/images/fl.avif';
import { FaCheckCircle } from "react-icons/fa";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Today = () => {

  useEffect(() => {
    // Animation for the title
    gsap.from('.today-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.today-title', // Trigger the animation when the element comes into view
        start: 'top 80%', // When the top of the element reaches 80% of the viewport height
        toggleActions: 'play none none reverse', // Start the animation when it enters the viewport, reverse when it leaves
      },
    });

    // Animation for the images (Todaycp components)
    gsap.from('.todaycp', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2, // Add a delay between animations of different Todaycp components
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.todaycp', // Trigger the animation when the Todaycp element comes into view
        start: 'top 80%', // When the top of the Todaycp element reaches 80% of the viewport height
        toggleActions: 'play none none reverse',
      },
    });



  }, []);

  return (
    <div className='text-center flex flex-col gap-6 items-center'>
      <h2 className="mt-5 text-2xl today-title">{new Date().toLocaleDateString()}</h2>
      <h1 className="text-3xl font-semibold today-title">Stay Inspired</h1>

      <div className="flex flex-wrap gap-16 justify-center mt-10 w-[70%]">
        <Todaycp img={fl} textContent="Flower" className="todaycp" />
        <Todaycp img={fl} textContent="Flower" className="todaycp" />
        <Todaycp img={fl} textContent="Flower" className="todaycp" />
        <Todaycp img={fl} textContent="Flower" className="todaycp" />
        <Todaycp img={fl} textContent="Flower" className="todaycp" />
        <Todaycp img={fl} textContent="Sachin" className="todaycp" />
      </div>

      <FaCheckCircle className='text-3xl' />

      <div className='flex flex-col gap-1'>
        <small>That's it for today!</small>
        <strong className='mb-4'>Come back tomorrow for more inspiration</strong>
      </div>
    </div>
  );
};

export default Today;
