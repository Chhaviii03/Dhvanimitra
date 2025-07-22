import React from "react";
import { AiOutlineCalendar, AiOutlineRobot, AiOutlineVideoCamera } from "react-icons/ai";
import { motion } from "framer-motion";

const features = [
  {
    icon: <AiOutlineCalendar className="w-12 h-12 text-white" />,
    title: "Automated Calendar Booking",
    description: "Smart scheduling with automated calendar integration saves time and eliminates back-and-forth emails.",
    color: "#7C3AED", // Purple
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: <AiOutlineRobot className="w-12 h-12 text-white" />,
    title: "AI Mentor Matching",
    description: "Our advanced AI analyzes 20+ factors to connect you with your ideal mentor in seconds.",
    color: "#10B981", // Emerald
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: <AiOutlineVideoCamera className="w-12 h-12 text-white" />,
    title: "HD Video Calling",
    description: "Crystal-clear video calls with virtual backgrounds and real-time collaboration tools.",
    color: "#3B82F6", // Blue
    gradient: "from-blue-500 to-cyan-600"
  },
];

const WhyMargDarshi = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">MentorConnect</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of mentorship with our cutting-edge platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500`}></div>
              
              {/* Feature card */}
              <div className="relative h-full bg-gray-900 rounded-3xl p-8 border border-gray-800 overflow-hidden">
                {/* Animated blob background */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 opacity-20 bg-gradient-to-br ${feature.gradient} rounded-full animate-pulse`}></div>
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <div 
                    className="w-20 h-20 rounded-xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add this to your global CSS (tailwind.config.js or CSS file) */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.2); }
          66% { transform: translate(-20px, 20px) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyMargDarshi;