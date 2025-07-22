import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaTachometerAlt, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

// Custom color palette
const colors = {
  primary: '#4F46E5',       // Indigo-600
  primaryHover: '#4338CA',   // Indigo-700
  secondary: '#10B981',      // Emerald-500
  secondaryHover: '#059669', // Emerald-600
  light: '#F9FAFB',          // Gray-50
  dark: '#111827',           // Gray-900
  muted: '#6B7280',          // Gray-500
  danger: '#EF4444',         // Red-500
  dangerHover: '#DC2626'     // Red-600
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
        className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 w-full z-50 border-b border-gray-200 shadow-sm"
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg">MC</span>
              </div>
              <span className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                MentorConnect
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {[
              { to: '/', text: 'Home' },
              { to: '/about', text: 'About' },
              { to: '/contact', text: 'Contact' },
            ].map((link, index) => (
              <motion.div
                key={index}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  className="relative px-3 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
                  whileHover={{ scale: 1.02, backgroundColor: colors.light }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-medium">
                    {user?.fullName?.charAt(0) || 'U'}
                  </div>
                  <span className="text-gray-700 font-medium">{user?.fullName || 'User'}</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-gray-500 text-sm" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden z-50"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div variants={dropdownItemVariants}>
                        <Link
                          to={profileLink}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <FaUserCircle className="mr-3 text-indigo-500" /> 
                          <span>Profile</span>
                        </Link>
                      </motion.div>
                      <motion.div variants={dropdownItemVariants}>
                        <Link
                          to={dashboardLink}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <FaTachometerAlt className="mr-3 text-indigo-500" /> 
                          <span>Dashboard</span>
                        </Link>
                      </motion.div>
                      <div className="border-t border-gray-200"></div>
                      <motion.div variants={dropdownItemVariants}>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                        >
                          <FaSignOutAlt className="mr-3 text-red-400" /> 
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
                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
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
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
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
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
              whileHover={{ scale: 1.1, backgroundColor: colors.light }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5 text-gray-700" />
              ) : (
                <FaBars className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white shadow-lg px-6 py-4 border-t border-gray-200 overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col space-y-1">
                {[
                  { to: '/', text: 'Home' },
                  { to: '/about', text: 'About' },
                  { to: '/contact', text: 'Contact' },
                ].map((link, index) => (
                  <motion.div key={index} variants={mobileItemVariants}>
                    <Link
                      to={link.to}
                      className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <motion.div variants={mobileItemVariants} className="mb-2">
                      <Link
                        to={profileLink}
                        className="block px-4 py-3 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Profile
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants} className="mb-2">
                      <Link
                        to={dashboardLink}
                        className="block px-4 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Dashboard
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants}>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors duration-200"
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
                        className="block px-4 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 text-center"
                        onClick={toggleMenu}
                      >
                        Join as Mentee
                      </Link>
                    </motion.div>
                    <motion.div variants={mobileItemVariants}>
                      <Link
                        to="/mentor-login"
                        className="block px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 text-center"
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