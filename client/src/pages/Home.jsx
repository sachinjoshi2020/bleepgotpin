import { useEffect } from 'react'
import gsap from 'gsap'
import { IoIosArrowDown } from 'react-icons/io'
import Homeexplore from '../components/Homeexplore'
import Discover from '../components/Discover'
import Signup from '../components/Signup'
import Aboutbleepgot from '../components/Aboutbleepgot'
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../assets/images/cards/one.jpg'

const Home = () => {
  useEffect(() => {
    // GSAP animation on page load
    const tl = gsap.timeline()

    // Animate the header text (fade in with slide from the top)
    tl.fromTo(
      '.hero-header',
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out'
      }
    )
      // Animate the subheader text (fade in with slide from the bottom)
      .fromTo(
        '.hero-subheader',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out'
        },
        '-=1' // Start this animation 1 second before the previous ends
      )
      // Animate the images in the hero section (fade in and scale from 0)
      .fromTo(
        '.heroImageShow img',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.2 // Stagger the animation for the images
        },
        '-=1' // Start this animation 1 second before the previous ends
      )
      // Animate the down arrow (scale and fade in)
      .fromTo(
        '.centerPart',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        },
        '-=1' // Start this animation 1 second before the previous ends
      )
  }, [])

  return (
    <section className='heroPage w-screen relative'>
      <div className='w-screen relative'>
        <div className='w-screen h-[85vh] overflow-hidden flex flex-col'>
          <h1 className='hero-header text-7xl text-center mt-20 font-semibold text-green-800'>
            Get your next
          </h1>

          <div className='heroImageShow w-screen mt-5 p-4'>
            <h2 className='hero-subheader text-center text-7xl text-green-700'>
              DIY idea
            </h2>

            <div className='imgArea flex justify-between items-center'>
              <div className='leftPar flex gap-4 relative'>
                <img
                  src='https://storage.googleapis.com/pod_public/1300/161762.jpg'
                  alt=''
                  className='w-60 object-cover rounded-xl absolute left-[-200px]'
                />
                <div className='flex gap-3 relative left-[53px]'>
                  <img
                    src='https://storage.googleapis.com/pod_public/1300/161762.jpg'
                    alt=''
                    className='w-60 object-cover rounded-xl translate-y-[100px]'
                  />
                  <img
                    src='https://storage.googleapis.com/pod_public/1300/161762.jpg'
                    alt=''
                    className='w-60 object-cover rounded-xl translate-y-[200px]'
                  />
                </div>
              </div>
              <div className='centerPart bg-green-900 w-14 h-14 flex items-center justify-center text-white rounded-full relative top-16 text-2xl'>
                <IoIosArrowDown />
              </div>
              <div className='rightPart flex gap-4 relative'>
                <img
                  src='https://storage.googleapis.com/pod_public/1300/161762.jpg'
                  alt=''
                  className='w-60 object-cover rounded-xl absolute right-[-200px]'
                />
                <div className='flex gap-3 relative right-[53px]'>
                  <img
                    src='https://storage.googleapis.com/pod_public/1300/161762.jpg'
                    alt=''
                    className='w-60 object-cover rounded-xl translate-y-[200px]'
                  />
                  <img
                    src='https://storage.googleapis.com/pod_public/1300/161762.jpg'
                    alt=''
                    className='w-60 object-cover rounded-xl translate-y-[100px]'
                  />
                </div>
              </div>
            </div>

            {/* media standerds */}
            <div className='imgSection p-2 bg-slate-300'>
              <Swiper slidesPerView={1} spaceBetween={10} className='mySwiper'>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img} alt='' />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className='smokeLayer w-screen h-20 bottom-[0px] absolute'></div>
      </div>
      <Homeexplore />
      <Discover />
      <Signup />
      <Aboutbleepgot />
    </section>
  )
}

export default Home
