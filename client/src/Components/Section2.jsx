import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../assets/sliderImage.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoPerson, IoBriefcase, IoCalendar, IoCode, IoStar } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// Custom arrow components with premium styling
const NextArrow = ({ onClick }) => (
  <motion.div
    className="custom-next-arrow"
    style={{
      position: "absolute",
      bottom: "-70px",
      right: "30px",
      zIndex: 2,
      cursor: "pointer",
    }}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-full shadow-lg flex items-center justify-center border border-[#90CAF9]/30 hover:from-[#F0F4F8] hover:to-[#E1E8ED] hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
      <FaArrowRightLong className="text-[#1565C0] text-xl" />
    </div>
  </motion.div>
);

const PrevArrow = ({ onClick }) => (
  <motion.div
    className="custom-prev-arrow"
    style={{
      position: "absolute",
      bottom: "-70px",
      right: "90px",
      zIndex: 2,
      cursor: "pointer",
    }}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-full shadow-lg flex items-center justify-center border border-[#90CAF9]/30 hover:from-[#F0F4F8] hover:to-[#E1E8ED] hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
      <FaArrowLeftLong className="text-[#1565C0] text-xl" />
    </div>
  </motion.div>
);

const mentors = [
  {
    name: "Jhon Dwirian",
    title: "UI/UX Design Lead",
    company: "Grab",
    image: sliderImg,
    industry: "Design & Creative",
    yearsOfExperience: 8,
    rating: 4.9,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    isFavorite: true,
  },
  {
    name: "Leon S Kennedy",
    title: "Machine Learning",
    company: "Google",
    image: sliderImg,
    industry: "Technology",
    yearsOfExperience: 10,
    rating: 5.0,
    skills: ["Python", "TensorFlow", "Deep Learning"],
    isFavorite: false,
  },
  {
    name: "Nguyen Thuy",
    title: "Android Developer",
    company: "Airbnb",
    image: sliderImg,
    industry: "Mobile Development",
    yearsOfExperience: 6,
    rating: 4.8,
    skills: ["Kotlin", "Android Studio", "Java"],
    isFavorite: true,
  },
];

const MentorMenteeSpotlight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Enhanced animation variants for premium feel
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1],
      } 
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px -10px rgba(121, 134, 203, 0.3), 0 0 0 1px rgba(159, 168, 218, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#F0F8FF] via-[#E3F2FD] to-[#BBDEFB]">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#1976D2]/30 to-[#5A8FA0]/30 blur-sm"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFFFFF]/10 to-[#81D4FA]/20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1565C0] via-[#1976D2] to-[#5A8FA0] bg-clip-text text-transparent">
            Meet Our <span className="bg-gradient-to-r from-[#5A8FA0] to-[#5A8FA0] bg-clip-text text-transparent">Expert Mentors</span>
          </h2>
          <p className="text-xl text-[#1565C0] max-w-3xl mx-auto opacity-90 font-light">
            Discover exceptional guidance from our curated collection of industry leaders
          </p>
        </motion.div>

        <motion.div
          className="mb-12 custom-slider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="px-3 py-2"
              >
                <div className="relative bg-gradient-to-br from-white via-[#FAFAFA] to-[#F8F9FA] p-8 rounded-3xl border border-[#E1BEE7]/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full backdrop-blur-sm group">
                  {/* Premium glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#E1BEE7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Enhanced favorite heart */}
                  <motion.button 
                    className="absolute top-6 right-6 z-20"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {mentor.isFavorite ? (
                      <FaHeart className="text-[#F44336] text-2xl drop-shadow-sm" />
                    ) : (
                      <FaRegHeart className="text-[#B0BEC5] text-2xl hover:text-[#F44336] transition-colors duration-300" />
                    )}
                  </motion.button>

                  {/* Enhanced Profile Section */}
                  <div className="flex items-center space-x-5 mb-8 relative z-10">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    >
                      <div className="w-24 h-24 rounded-2xl border-2 border-[#BBDEFB]/30 overflow-hidden shadow-lg bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] p-1">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <motion.div 
                        className="absolute -bottom-2 -right-2 w-9 h-9 bg-gradient-to-br from-[#5A8FA0] to-[#5A8FA0] rounded-full border-3 border-white flex items-center justify-center shadow-lg"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <IoStar className="text-white text-sm" />
                      </motion.div>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#2E2E2E] mb-1">{mentor.name}</h4>
                      <p className="text-[#1565C0] text-sm font-medium">{mentor.title}</p>
                      <p className="text-[#5A8FA0] text-xs font-semibold">@ {mentor.company}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <IoStar 
                              key={i} 
                              className={i < Math.floor(mentor.rating) ? "text-[#FFB300]" : "text-[#E0E0E0]"} 
                            />
                          ))}
                        </div>
                        <span className="text-[#1565C0] text-xs ml-2 font-medium">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Details Section */}
                  <div className="space-y-6 relative z-10">
                    <div className="flex justify-between bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] rounded-2xl p-4 border border-[#90CAF9]/20">
                      <div className="text-center flex-1">
                        <p className="text-[#1976D2] text-xs font-semibold uppercase tracking-wide mb-1">Industry</p>
                        <p className="text-[#2E2E2E] font-bold text-sm">{mentor.industry}</p>
                      </div>
                      <div className="h-10 w-px bg-gradient-to-b from-[#90CAF9] to-transparent mx-4"></div>
                      <div className="text-center flex-1">
                        <p className="text-[#1976D2] text-xs font-semibold uppercase tracking-wide mb-1">Experience</p>
                        <p className="text-[#2E2E2E] font-bold text-sm">{mentor.yearsOfExperience} years</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[#1565C0] text-sm font-semibold mb-3 flex items-center">
                        <IoCode className="mr-2 text-[#5A8FA0]" />
                        Core Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-4 py-2 text-xs bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] text-[#1565C0] rounded-full border border-[#90CAF9]/30 font-medium hover:from-[#F0F4F8] hover:to-[#E1E8ED] hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: skillIndex * 0.1, duration: 0.4, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Premium CTA Button */}
                  <motion.button
                    className="w-full mt-8 py-4 bg-gradient-to-r from-[#1565C0] via-[#1976D2] to-[#5A8FA0] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#42A5F5] to-[#78A3B4] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-sm tracking-wide">Connect Now</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Enhanced animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-15px) rotate(2deg) scale(1.05); 
          }
          50% { 
            transform: translateY(-25px) rotate(-1deg) scale(1.1); 
          }
          75% { 
            transform: translateY(-10px) rotate(1deg) scale(1.05); 
          }
        }
        
        .slick-dots {
          bottom: -50px !important;
        }
        
        .slick-dots li {
          margin: 0 8px !important;
        }
        
        .slick-dots li button:before {
          color: #1565C0 !important;
          opacity: 0.4 !important;
          font-size: 12px !important;
          transition: all 0.3s ease !important;
        }
        
        .slick-dots li.slick-active button:before {
          color: #5A8FA0 !important;
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        
        .slick-dots li:hover button:before {
          opacity: 0.8 !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </section>
  );
};

export default MentorMenteeSpotlight;