import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaArrowRight } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -5,
      textShadow: "0 5px 15px rgba(255,255,255,0.3)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 }
    }
  };

  // Color scheme
  const colors = {
    primary: "#7C3AED",       // Purple-600
    primaryLight: "#8B5CF6",  // Purple-500
    accent: "#EC4899",        // Pink-500
    textLight: "#E5E7EB",     // Gray-200
    textLighter: "#F9FAFB"    // Gray-50
  };

  return (
    <motion.footer
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-75 rounded-full"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full">
                  <span className="text-xl font-bold">MC</span>
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                MentorConnect
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 leading-relaxed"
              whileHover={{ x: 5 }}
            >
              Empowering careers through meaningful mentorship connections.
            </motion.p>
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Subscribe to our newsletter
              </h3>
              <motion.div 
                className="flex"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 text-gray-900 bg-gray-100 border-0 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
                <motion.button
                  className="px-4 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-r-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RiSendPlaneFill className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold tracking-wider text-gray-200 uppercase mb-6"
              whileHover={hoverVariants}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Mentors', 'Success Stories', 'Pricing'].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    color: colors.textLighter,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex items-center"
                >
                  <FaArrowRight className="mr-2 text-purple-400 text-xs" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold tracking-wider text-gray-200 uppercase mb-6"
              whileHover={hoverVariants}
            >
              Resources
            </motion.h3>
            <ul className="space-y-3">
              {['Blog', 'Guides', 'Webinars', 'Career Toolkit', 'FAQ'].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    color: colors.textLighter,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex items-center"
                >
                  <FaArrowRight className="mr-2 text-purple-400 text-xs" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold tracking-wider text-gray-200 uppercase mb-6"
              whileHover={hoverVariants}
            >
              Connect With Us
            </motion.h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-gray-300">hello@mentorconnect.com</p>
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: FaTwitter, color: "#1DA1F2" },
                    { icon: FaLinkedin, color: "#0077B5" },
                    { icon: FaInstagram, color: "#E1306C" },
                    { icon: FaGithub, color: "#333" }
                  ].map((SocialIcon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-opacity-80 transition-all"
                      style={{ backgroundColor: SocialIcon.color }}
                      variants={itemVariants}
                      whileHover={socialIconVariants}
                    >
                      <SocialIcon.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr 
          className="my-12 border-gray-700"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
        >
          <motion.p 
            className="text-gray-400 text-sm mb-4 md:mb-0"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} MentorConnect. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            variants={containerVariants}
          >
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-purple-300 text-sm transition-colors"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  color: colors.textLighter,
                  textShadow: "0 2px 10px rgba(236,72,153,0.5)"
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;