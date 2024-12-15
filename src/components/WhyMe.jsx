import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaLightbulb, FaClock, FaUsers } from "react-icons/fa";
import Divider from "./Divider";

const WhyMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const reasons = [
    {
      icon: <FaCode />,
      title: "Technical Expertise",
      description: "Proficient in modern web technologies and best practices.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "Creative approach to solving complex technical challenges.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description: "Strong focus on meeting deadlines and project milestones.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative",
      description: "Excellent communication and team collaboration skills.",
    },
  ];

  return (
    <section
      id="why-me"
      className="py-20"
      style={{ backgroundColor: "#F9FAFB" }} // Add background color here
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="libre-baskerville-regular text-4xl font-bold text-gray-900 mb-4">
            Why Choose Me?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        {" "}
        <Divider />
      </div>
    </section>
  );
};

export default WhyMe;
