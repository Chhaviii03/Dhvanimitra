import React from 'react';
import { FaUser, FaSearch, FaCalendarAlt, FaVideo, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: 'Create Profile',
    icon: <FaUser className="text-3xl text-white" />, // icon color
    bgColor: 'bg-gradient-to-br from-[#B266FF] to-[#6CA8FF]',
    description: 'Set up your profile to connect with experienced mentors.',
  },
  {
    id: 2,
    title: 'Find Mentors',
    icon: <FaSearch className="text-3xl text-white" />,
    bgColor: 'bg-gradient-to-br from-[#00FFBB] to-[#009BFF]',
    description: 'Browse and find the perfect mentor for your goals.',
  },
  {
    id: 3,
    title: 'Book Sessions',
    icon: <FaCalendarAlt className="text-3xl text-white" />,
    bgColor: 'bg-gradient-to-br from-[#A94EFF] to-[#9147FF]',
    description: 'Schedule sessions at convenient times.',
  },
  {
    id: 4,
    title: 'Start Learning',
    icon: <FaVideo className="text-3xl text-white" />,
    bgColor: 'bg-gradient-to-br from-[#339EFF] to-[#6CA8FF]',
    description: 'Engage in virtual mentorship sessions.',
  },
];

const HowItWorks = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0F2C] to-[#101628]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How MentorConnect Works
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className={`relative flex flex-col items-center p-8 rounded-3xl shadow-lg border-2 border-[#B266FF] bg-[#0C0F1D] overflow-hidden ${step.bgColor}`}
              variants={item}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 0 40px #B266FF55' }}
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full shadow-lg" style={{background: 'rgba(255,255,255,0.08)'}}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
              <p className="text-[#E2E8F0] text-center mb-4">{step.description}</p>
              <FaArrowRight className="absolute bottom-6 right-6 text-[#6CA8FF] text-2xl opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;