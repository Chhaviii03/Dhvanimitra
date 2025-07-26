import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import homeHero from '../assets/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651.png';

// Card data for homepage features
const cards = [
  {
    label: 'Schedule Sessions',
    value: 'Calendar',
    icon: (
      <div className="bg-[#9147FF] p-4 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="4" strokeWidth="2" />
          <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
        </svg>
      </div>
    ),
    border: 'border-[#A94EFF]'
  },
  {
    label: 'AI Matchmaking',
    value: 'Smart Match',
    icon: (
      <div className="bg-[#1DD1A1] p-4 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M8 12l2 2 4-4" strokeWidth="2" />
        </svg>
      </div>
    ),
    border: 'border-[#00FFBB]'
  },
  {
    label: 'Video Mentorship',
    value: 'Live Call',
    icon: (
      <div className="bg-[#339EFF] p-4 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="10" rx="3" strokeWidth="2" />
          <path d="M16 7v10" strokeWidth="2" />
        </svg>
      </div>
    ),
    border: 'border-[#009BFF]'
  }
];

const HomeHero = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -2 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      } 
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(18, 124, 113, 0.4)",
      transition: { duration: 0.3 } 
    },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0F2C] to-[#101628] overflow-hidden">
      {/* Neon Glow Overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#B266FF] rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6CA8FF] rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#00FFBB] rounded-full blur-[100px] opacity-20"></div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left: Text Section */}
        <div className="flex-1 lg:w-1/2 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-[#B266FF] bg-opacity-20 text-[#B266FF] rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8">
            👩‍💻 Where Ambition Meets Action
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="block text-white">Fuel Your</span>
            <span className="block">
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B266FF] to-[#6CA8FF]">Future</span>
              </span>
            </span>
            <span className="block mt-6">
              With <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B266FF] to-[#6CA8FF]">MentorConnect</span>
              <span className="inline-block ml-2 animate-bounce">🚀</span>
            </span>
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-[#D2D6DC] mb-4">Connect. Learn. Grow.</h2>
          <p className="text-[#E2E8F0] text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            Connect with industry experts. Get custom guidance. Level up through interactive sessions, video mentorship, and intelligent matching. Your growth journey just got smarter — and faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mb-16">
            <Link
              to="/mentee-register"
              className="bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] text-white font-semibold py-4 px-10 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              Join as Mentee
            </Link>
            <Link
              to="/mentor-register"
              className="bg-transparent border-2 border-[#B266FF] text-[#B266FF] font-semibold py-4 px-10 rounded-xl shadow-md hover:bg-[#B266FF] hover:text-white transition-all duration-300"
            >
              Become a Mentor
            </Link>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`relative text-center p-6 rounded-xl border-2 ${card.border} shadow-lg bg-[#0C0F1D] overflow-hidden`}
              >
                {/* Circular overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white opacity-5"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  {card.icon}
                  <p className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#B266FF] to-[#6CA8FF]">
                    {card.value}
                  </p>
                  <p className="text-[#E2E8F0] text-sm md:text-base font-medium">{card.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Hero Image */}
        {/*<div className="flex-1 lg:w-1/2 relative flex items-center justify-center">*/}
        {/*  <div className="relative w-full max-w-xl mx-auto lg:max-w-none">*/}
        {/*    <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#B266FF] rounded-full blur-3xl opacity-30 z-0"></div>*/}
        {/*    <div className="relative z-10">*/}
        {/*      <img*/}
        {/*        src={homeHero}*/}
        {/*        className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105"*/}
        {/*        alt="Happy student with books"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6CA8FF] rounded-full blur-xl opacity-20 z-0"></div>*/}
        {/*    /!* Floating badge *!/*/}
        {/*    <div className="absolute -bottom-6 -right-6 bg-[#101628] px-6 py-3 rounded-2xl shadow-xl border border-[#B266FF] flex items-center">*/}
        {/*      <div className="bg-[#B266FF] bg-opacity-10 p-2 rounded-full mr-3">*/}
        {/*        <svg className="w-6 h-6 text-[#B266FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
        {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />*/}
        {/*        </svg>*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        <p className="text-sm font-medium text-[#D2D6DC]">Trusted by</p>*/}
        {/*        <p className="text-lg font-bold text-[#6CA8FF]">100+ Companies</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default HomeHero;

