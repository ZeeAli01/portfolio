import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold gradient-text mb-4"
          >
            Zain Ali
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="merriweather-regular-bold text-2xl md:text-3xl text-gray-600 mb-8"
          >
            Full Stack Web Developer.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/ZeeAli01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/zain-ali-1763bb247/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~017686f398a196b6d0?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaSquareUpwork size={30} />
            </a>
            <a
              href="mailto:sheikh.zain0110@gmail.com"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
