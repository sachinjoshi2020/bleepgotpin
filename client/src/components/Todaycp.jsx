
const Todaycp = ({ img, textContent }) => {
    return (
        <div className='relative flex flex-col justify-center items-center text-white'>
            <img src={img} alt="" className='w-[320px] rounded-2xl' />
            <h1 className='absolute z-50 bottom-10 text-7xl'>{textContent}</h1>
        </div>
    )
}

export default Todaycp
