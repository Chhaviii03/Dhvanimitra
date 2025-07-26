import React from "react";
import { AiOutlineCalendar, AiOutlineRobot, AiOutlineVideoCamera } from "react-icons/ai";
import { motion } from "framer-motion";

const features = [
  {
    icon: <AiOutlineCalendar className="w-12 h-12 text-white" />,
    title: "Automated Calendar Booking",
    description: "Smart scheduling with automated calendar integration saves time and eliminates back-and-forth emails.",
    color: "#A94EFF", // Neon Purple
    gradient: "from-[#A94EFF] to-[#9147FF]"
  },
  {
    icon: <AiOutlineRobot className="w-12 h-12 text-white" />,
    title: "AI Mentor Matching",
    description: "Our advanced AI analyzes 20+ factors to connect you with your ideal mentor in seconds.",
    color: "#00FFBB", // Aqua Green
    gradient: "from-[#00FFBB] to-[#1DD1A1]"
  },
  {
    icon: <AiOutlineVideoCamera className="w-12 h-12 text-white" />,
    title: "HD Video Calling",
    description: "Crystal-clear video calls with virtual backgrounds and real-time collaboration tools.",
    color: "#009BFF", // Bright Blue
    gradient: "from-[#009BFF] to-[#339EFF]"
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
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0A0F2C] to-[#101628]">
      {/* Neon Glow Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#B266FF] rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6CA8FF] rounded-full blur-[120px] opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#B266FF] to-[#6CA8FF] bg-clip-text text-transparent mb-4">
            Why MentorConnect?
          </h2>
          <p className="text-lg text-[#E2E8F0] max-w-2xl mx-auto">
            Unlock your potential with smart matching, seamless scheduling, and immersive video mentorship.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={`relative p-8 rounded-3xl shadow-lg border-2 border-[#B266FF] bg-[#0C0F1D] flex flex-col items-center text-center ${feature.gradient}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full shadow-lg" style={{background: feature.color}}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#E2E8F0] mb-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMargDarshi;