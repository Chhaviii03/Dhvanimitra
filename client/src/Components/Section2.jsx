import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../assets/sliderImage.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoPerson, IoBriefcase, IoCalendar, IoCode, IoStar } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// Custom arrow components
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
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-[#6C63FF] rounded-full shadow-lg flex items-center justify-center border-2 border-white hover:bg-[#524BCC] transition-colors duration-300">
      <FaArrowRightLong className="text-white text-xl" />
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
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-[#6C63FF] rounded-full shadow-lg flex items-center justify-center border-2 border-white hover:bg-[#524BCC] transition-colors duration-300">
      <FaArrowLeftLong className="text-white text-xl" />
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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
      } 
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#6C63FF]/20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00695C]">
            Meet Our <span className="text-[#6C63FF]">Expert Mentors</span>
          </h2>
          <p className="text-xl text-[#00897B] max-w-3xl mx-auto">
            Find your perfect guide from our talented professionals
          </p>
        </motion.div>

        <motion.div
          className="mb-12 custom-slider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
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
                <div className="relative bg-white p-6 rounded-3xl border-2 border-[#E0F7FA] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                  {/* Favorite heart */}
                  <button className="absolute top-4 right-4 z-10">
                    {mentor.isFavorite ? (
                      <FaHeart className="text-[#FF5252] text-2xl" />
                    ) : (
                      <FaRegHeart className="text-gray-400 text-2xl hover:text-[#FF5252]" />
                    )}
                  </button>

                  {/* Profile Section */}
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-20 h-20 rounded-2xl border-4 border-[#6C63FF]/20 overflow-hidden shadow-sm">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#6C63FF] rounded-full border-2 border-white flex items-center justify-center shadow-md">
                        <IoStar className="text-white text-xs" />
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{mentor.name}</h4>
                      <p className="text-gray-600 text-sm">{mentor.title} @ {mentor.company}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex text-[#FFC107]">
                          {[...Array(5)].map((_, i) => (
                            <IoStar key={i} className={i < Math.floor(mentor.rating) ? "text-[#FFC107]" : "text-gray-300"} />
                          ))}
                        </div>
                        <span className="text-gray-600 text-xs ml-1">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between bg-[#E0F7FA] rounded-xl p-3">
                      <div className="text-center">
                        <p className="text-[#00897B] text-xs">Industry</p>
                        <p className="text-gray-900 font-medium">{mentor.industry}</p>
                      </div>
                      <div className="h-8 w-px bg-[#B2DFDB]"></div>
                      <div className="text-center">
                        <p className="text-[#00897B] text-xs">Experience</p>
                        <p className="text-gray-900 font-medium">{mentor.yearsOfExperience} yrs</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[#00695C] text-sm font-medium mb-2 flex items-center">
                        <IoCode className="mr-2 text-[#6C63FF]" />
                        Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 text-xs bg-[#6C63FF]/10 text-gray-900 rounded-full border border-[#6C63FF]/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full mt-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#4A42D6] text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Connect Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .slick-dots li button:before {
          color: #6C63FF !important;
          opacity: 0.5 !important;
          font-size: 10px !important;
        }
        .slick-dots li.slick-active button:before {
          color: #6C63FF !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default MentorMenteeSpotlight;