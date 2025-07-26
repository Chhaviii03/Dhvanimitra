import React from 'react';
import backgroundImage from '../assets/backimg.jpg'

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#0A0F2C] to-[#101628] py-16 px-4 flex flex-col items-center relative"
    style={{
        backgroundImage: `url(${backgroundImage}), linear-gradient(to right, #4b4b4b, #1e1e1e)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: "fixed"
      }}>
      {/* Neon Glow Overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#B266FF] rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6CA8FF] rounded-full blur-[120px] opacity-30"></div>
      </div>
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] bg-clip-text text-transparent z-10">
        Ready to make a difference?
      </h2>
      <p className="text-lg mb-8 text-center text-[#E2E8F0] z-10">
        Whether you want to advance your career or share your expertise, we have a place for you.
      </p>
      <div className="flex space-x-4 z-10">
        {/* Get Started as a Mentee Button */}
        <a
          href="#get-started" // Replace with your actual link
          className="bg-gradient-to-r from-[#00FFBB] to-[#009BFF] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-[#009BFF] hover:to-[#00FFBB]"
        >
          Get Started as a Mentee
        </a>
        {/* Join as a Mentor Button */}
        <a
          href="#join-mentor" // Replace with your actual link
          className="bg-gradient-to-r from-[#A94EFF] to-[#9147FF] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-[#9147FF] hover:to-[#A94EFF]"
        >
          Join as a Mentor
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
