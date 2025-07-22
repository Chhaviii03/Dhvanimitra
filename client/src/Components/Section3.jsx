import React from 'react';
import { FaUserTie, FaCalendarCheck, FaChartLine } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiUsers } from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers className="w-12 h-12" />,
    title: "120+ Mentors",
    description: "Experts from top global companies guiding your journey",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: <FaCalendarCheck className="w-12 h-12" />,
    title: "5,000+ Sessions",
    description: "Successfully conducted mentorship engagements",
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: <FiTrendingUp className="w-12 h-12" />,
    title: "95% Success Rate",
    description: "Mentees achieving key career milestones",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: <FiAward className="w-12 h-12" />,
    title: "Industry Recognition",
    description: "Award-winning mentorship programs",
    accent: "from-emerald-500 to-teal-400",
  },
];

const StatisticsSection = () => {
  const bgVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const GlowEffect = ({ color }) => (
    <motion.div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
      }}
    />
  );

  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50"
      variants={bgVariants}
      animate="animate"
      style={{ backgroundSize: "200% 200%" }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-20 w-96 h-96 rounded-full bg-purple-400 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 rounded-full bg-teal-400 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-block text-xs font-semibold tracking-wider text-teal-600 uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our Track Record
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Proven Results,{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
                  Exceptional Impact
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 20">
                  <path
                    d="M0 10 Q 50 20 100 10 T 200 10"
                    stroke="#0d9488"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Numbers that reflect our commitment to transforming careers through mentorship
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <GlowEffect
                color={
                  stat.accent.includes("blue")
                    ? "#3b82f6"
                    : stat.accent.includes("purple")
                    ? "#a855f7"
                    : stat.accent.includes("amber")
                    ? "#f59e0b"
                    : "#10b981"
                }
              />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.accent} rounded-t-3xl`}
                ></div>
                <div
                  className={`flex justify-center items-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${stat.accent} text-white shadow-md`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight">
                  {stat.title}
                </h3>
                <p className="text-gray-600 font-medium text-base leading-relaxed flex-grow">
                  {stat.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-medium text-gray-500">
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full shadow-lg">
            <div className="flex items-center space-x-2">
              <FiAward className="text-white" />
              <span className="text-white font-semibold">
                Trusted by <span className="font-bold">10,000+</span> professionals worldwide
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatisticsSection;