import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Card = (props) => {
  let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25] border-4 border-[#B266FF] shadow-lg"
          src={review.image}
          alt={review.name} />
        <div className='w-[140px] h-[140px] bg-gradient-to-br from-[#B266FF] to-[#6CA8FF] rounded-full absolute top-[-6px] z-[-10] left-[10px] opacity-40'></div>
      </div>
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize text-white bg-clip-text bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] text-transparent'>{review.name}</p>
        <p className='text-[#6CA8FF] uppercase text-sm'>{review.job}</p>
      </div>
      <div className='text-[#B266FF] mx-auto mt-5'>
        <FaQuoteLeft />
      </div>
      <div className='text-center mt-4 text-[#E2E8F0]'>
        {review.text}
      </div>
      <div className='text-[#B266FF] mx-auto mt-5'>
        <FaQuoteRight />
      </div>
    </div>
  )
}

export default Card