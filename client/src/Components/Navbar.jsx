import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaTachometerAlt, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

// Custom color palette
const colors = {
  primary: '#B266FF',       // Lavender Purple
  primaryHover: '#6CA8FF',   // Sky Blue
  secondary: '#00FFBB',      // Aqua Green
  secondaryHover: '#009BFF', // Bright Blue
  light: '#E2E8F0',          // Muted White
  dark: '#0A0F2C',           // Deep Navy
  muted: '#D2D6DC',          // Light Gray
  danger: '#A94EFF',         // Neon Purple
  dangerHover: '#9147FF'     // Neon Purple Hover
};

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { 
    scale: 1.05, 
    backgroundColor: colors.primaryHover,
    transition: { duration: 0.3 } 
  },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const secondaryButtonVariants = {
  hover: { 
    scale: 1.05, 
    backgroundColor: colors.secondaryHover,
    transition: { duration: 0.3 } 
  },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    height: 'auto', 
    transition: { 
      duration: 0.3, 
      ease: 'easeOut',
      staggerChildren: 0.1
    } 
  },
  exit: { opacity: 0, y: -10, height: 0 }
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { opacity: 0, height: 0 }
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logoutUser, user, role, isLoading } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully");
    navigate("/");
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const navbarHeight = '80px';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const dashboardLink = role === 'mentor' ? '/mentor-show' : role === 'mentee' ? '/mentee-main' : '/';
  const profileLink = role === 'mentor' ? '/mentor-user' : role === 'mentee' ? '/mentee-user' : '/';

  if (isLoading) {
    return (
      <div className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4 h-[80px]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600 animate-pulse"></div>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="hidden md:flex space-x-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="hidden md:flex space-x-4">
            <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="md:hidden h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.nav
        className="bg-gradient-to-b from-[#0A0F2C] to-[#101628] backdrop-blur-sm fixed top-0 left-0 w-full z-50 border-b border-[#B266FF] shadow-lg"
        style={{ height: navbarHeight }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-full">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg">MC</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] group-hover:from-[#6CA8FF] group-hover:to-[#B266FF] transition-colors duration-300">
                MentorConnect
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {[{ to: '/', text: 'Home' }, { to: '/about', text: 'About' }, { to: '/contact', text: 'Contact' }].map((link, index) => (
              <motion.div
                key={index}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  className="relative px-3 py-2 text-[#E2E8F0] hover:text-[#B266FF] transition-colors duration-300 group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative dropdown-container">
                <motion.button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#0C0F1D] hover:bg-[#101628] transition-colors duration-300 border border-[#B266FF]"
                  whileHover={{ scale: 1.02, backgroundColor: colors.dark }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] flex items-center justify-center text-white font-medium">
                    {user?.fullName?.charAt(0) || 'U'}
                  </div>
                  <span className="text-[#E2E8F0] font-medium">{user?.fullName || 'User'}</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-[#B266FF] text-sm" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-56 bg-[#0C0F1D] shadow-lg rounded-xl border border-[#B266FF] overflow-hidden z-50"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div variants={dropdownItemVariants}>
                        <Link
                          to={profileLink}
                          className="flex items-center px-4 py-3 text-[#E2E8F0] hover:bg-[#B266FF] hover:text-white transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <FaUserCircle className="mr-3 text-[#6CA8FF]" />
                          <span>Profile</span>
                        </Link>
                      </motion.div>
                      <motion.div variants={dropdownItemVariants}>
                        <Link
                          to={dashboardLink}
                          className="flex items-center px-4 py-3 text-[#E2E8F0] hover:bg-[#B266FF] hover:text-white transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <FaTachometerAlt className="mr-3 text-[#6CA8FF]" />
                          <span>Dashboard</span>
                        </Link>
                      </motion.div>
                      <div className="border-t border-[#B266FF]"></div>
                      <motion.div variants={dropdownItemVariants}>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-[#E2E8F0] hover:bg-[#A94EFF] hover:text-white transition-colors duration-200"
                        >
                          <FaSignOutAlt className="mr-3 text-[#A94EFF]" />
                          <span>Logout</span>
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <motion.div 
                  variants={buttonVariants} 
                  whileHover="hover" 
                  whileTap="tap"
                  className="hidden lg:block"
                >
                  <Link
                    to="/mentee-login"
                    className="bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    <span>Join as Mentee</span>
                  </Link>
                </motion.div>
                <motion.div 
                  variants={secondaryButtonVariants} 
                  whileHover="hover" 
                  whileTap="tap"
                >
                  <Link
                    to="/mentor-login"
                    className="bg-gradient-to-r from-[#00FFBB] to-[#009BFF] text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    <span>Become a Mentor</span>
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-[#0C0F1D] hover:bg-[#101628] transition-colors border border-[#B266FF]"
              whileHover={{ scale: 1.1, backgroundColor: colors.dark }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5 text-[#B266FF]" />
              ) : (
                <FaBars className="w-5 h-5 text-[#B266FF]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-gradient-to-b from-[#0A0F2C] to-[#101628] shadow-lg px-6 py-4 border-t border-[#B266FF] overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col space-y-1">
                {[{ to: '/', text: 'Home' }, { to: '/about', text: 'About' }, { to: '/contact', text: 'Contact' }].map((link, index) => (
                  <motion.div key={index} variants={mobileItemVariants}>
                    <Link
                      to={link.to}
                      className="block px-4 py-3 text-[#E2E8F0] hover:bg-[#B266FF] hover:text-white rounded-lg transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#B266FF]">
                {isLoggedIn ? (
                  <>
                    <motion.div variants={mobileItemVariants} className="mb-2">
                      <Link
                        to={profileLink}
                        className="block px-4 py-3 bg-[#B266FF] text-white font-medium rounded-lg hover:bg-[#6CA8FF] transition-colors duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Profile
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants} className="mb-2">
                      <Link
                        to={dashboardLink}
                        className="block px-4 py-3 bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] text-white font-medium rounded-lg hover:from-[#6CA8FF] hover:to-[#B266FF] transition-all duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Dashboard
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants}>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 bg-[#A94EFF] text-white font-medium rounded-lg hover:bg-[#9147FF] transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div variants={mobileItemVariants} className="mb-2">
                      <Link
                        to="/mentee-login"
                        className="block px-4 py-3 bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] text-white font-medium rounded-lg hover:from-[#6CA8FF] hover:to-[#B266FF] transition-all duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Join as Mentee
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants}>
                      <Link
                        to="/mentor-login"
                        className="block px-4 py-3 bg-gradient-to-r from-[#00FFBB] to-[#009BFF] text-white font-medium rounded-lg hover:from-[#009BFF] hover:to-[#00FFBB] transition-all duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Become a Mentor
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Spacer div to prevent content overlap */}
      <div style={{ height: navbarHeight }} />
    </>
  );
};

export default Navbar;