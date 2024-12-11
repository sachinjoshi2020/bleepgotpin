import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './style/style.css'

// import required modules
import { Navigation } from 'swiper/modules'
const Watchswiper = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className='mySwiper'
    >
      {slides.map((item, index) => (
        <SwiperSlide className='relative overflow-hidden' key={index}>
          <img src={item.image} alt='' className='w-full h-full object-cover rounded-2xl' />
          <div
            className='w-full h-full absolute rounded-2xl'
            style={{ background: 'rgb(0,0,0,.5)' }}
          >
            <div className='flex text-white  justify-end flex-col items-start h-full p-10 text-left gap-3'>
              <small>{item.category}</small>
              <h1 className='font-semibold'>{item.title}</h1>
              <button className='p-5 bg-slate-100 text-black rounded-full ms-[-10px]'>
                {item.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Watchswiper
