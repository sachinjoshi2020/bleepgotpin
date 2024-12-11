import React from 'react'

const Watchcatprops = ({ img, catTitle }) => {
  return (
    <div className='w-[220px] h-[140px] rounded-3xl overflow-hidden border-2 relative'>
      <img src={img} alt='' className='w-full h-full object-cover' />
      <h2 className='absolute z-50 bottom-0 w-full text-center bg-gray-100 py-1 text-black'>
        {catTitle}
      </h2>
    </div>
  )
}

export default Watchcatprops
