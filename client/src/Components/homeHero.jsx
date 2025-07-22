import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import homeHero from '../assets/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651.png';

// Experience data
const exps = [
  { label: 'Students', value: '10K+', icon: '👨‍🎓' },
  { label: 'Quality Courses', value: '20+', icon: '📚' },
  { label: 'Expert Mentors', value: '10+', icon: '👨‍🏫' },
];

// Premium ExpItem Component
const ExpItem = ({ item }) => {
  const { value, label, icon } = item;
  return (
    <motion.div
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <p className="text-[#127C71] text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-[#127C71] to-teal-600 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-gray-600 text-sm md:text-base font-medium">{label}</p>
    </motion.div>
  );
};

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
    <section className="relative bg-gradient-to-br from-gray-50 to-teal-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#127C71] rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1 lg:w-1/2 text-center lg:text-left"
            variants={textVariants}
          >
            <div className="mb-8">
              <motion.span 
                className="inline-block px-4 py-2 bg-[#127C71] bg-opacity-10 text-[#127C71] rounded-full text-sm font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                🚀 Transform Your Career
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
              variants={textVariants}
            >
              <span className="text-gray-800 block">
                Shape Your{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#127C71] to-teal-600">
                      Future
                    </span>
                  </span>
                  <svg
                    className="absolute -bottom-3 left-0 w-full h-4"
                    viewBox="0 0 200 20"
                  >
                    <path
                      d="M0,15 Q100,25 200,15"
                      stroke="url(#underline-gradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#127C71" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
              <span className="text-gray-800 block mt-6">
                with{' '}
                <span className="relative">
                  <span className="relative z-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-[#127C71]">
                      Expert Guidance
                    </span>
                  </span>
                  <motion.span 
                    className="absolute -right-6 -top-4 text-4xl"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    ✨
                  </motion.span>
                </span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-600 font-medium text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
              variants={textVariants}
            >
              "Connect with industry leaders and accelerate your career growth through personalized mentorship and premium courses."
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mb-16"
              variants={textVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/mentee-register"
                  className="relative overflow-hidden group bg-gradient-to-r from-[#127C71] to-teal-600 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Join as Mentee
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-[#127C71] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/mentor-register"
                  className="relative overflow-hidden group bg-white border-2 border-[#127C71] text-[#127C71] font-semibold py-4 px-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Become a Mentor
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#127C71] to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    Become a Mentor
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Experience Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
              variants={textVariants}
            >
              {exps.map((exp, index) => (
                <ExpItem key={index} item={exp} />
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 lg:w-1/2 relative"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-teal-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
              <div className="relative z-10">
                <img
                  src={homeHero}
                  className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105"
                  alt="Happy student with books"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#127C71] rounded-full filter blur-xl opacity-20 z-0"></div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#127C71] bg-opacity-10 p-2 rounded-full mr-3">
                  <svg className="w-6 h-6 text-[#127C71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Trusted by</p>
                  <p className="text-lg font-bold text-[#127C71]">100+ Companies</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;