import React from 'react';
import { FaUser, FaSearch, FaCalendarAlt, FaVideo, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: 'Create Profile',
    icon: <FaUser className="text-3xl" />,
    bgColor: 'bg-gradient-to-br from-red-500 to-pink-500',
    description: 'Set up your profile to connect with experienced mentors.',
  },
  {
    id: 2,
    title: 'Find Mentors',
    icon: <FaSearch className="text-3xl" />,
    bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    description: 'Browse and find the perfect mentor for your goals.',
  },
  {
    id: 3,
    title: 'Book Sessions',
    icon: <FaCalendarAlt className="text-3xl" />,
    bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
    description: 'Schedule sessions at convenient times.',
  },
  {
    id: 4,
    title: 'Start Learning',
    icon: <FaVideo className="text-3xl" />,
    bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-500',
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to connect with world-class mentors
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center"
              variants={item}
            >
              <div className="relative w-full max-w-xs">
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 ${step.bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg z-10`}>
                  {step.id}
                </div>
                
                {/* Card */}
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className={`${step.bgColor} flex items-center justify-center w-16 h-16 rounded-xl mb-4 text-white mx-auto`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started <FaArrowRight className="inline ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;