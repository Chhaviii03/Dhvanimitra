import React from "react";
import reviews from "./section6Data";
import Section6 from "./Section6";
import underline from '../assets/curveUnderline.svg';

const Section6Main = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-gradient-to-b from-[#0A0F2C] to-[#101628] min-h-screen relative">
      {/* Neon Glow Overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#B266FF] rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6CA8FF] rounded-full blur-[120px] opacity-30"></div>
      </div>
      <div className="text-center my-40 z-10">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col space-y-4 mb-44">
          <span className="relative font-bold bg-transparent">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#B266FF] to-[#6CA8FF]'>Our Testimonials</span>
            <img src={underline} className='absolute top-14 transform translate-y-0 left-56 rotate-3 w-24 md:w-60 h-auto' alt="underline" />
          </span>
        </h2>
        <Section6 reviews={reviews}/>
      </div>
    </div>
  );
};

export default Section6Main;
