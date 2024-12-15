import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import Divider from "./Divider";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section
        id="resume"
        className="py-20"
        style={{ backgroundColor: "#F9FAFB" }}
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
              My Resume
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

            <motion.a
              href="/Zain Ali's Resume.pdf"
              download
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Recent Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Web Developer</h4>
                  <p className="text-gray-600">
                    Ultra Codes (Pvt.) Ltd. • 2024
                  </p>
                  <p className="mt-2">
                    I have developed full-stack web applications showcasing
                    proficiency in both frontend and backend development such as
                    Bitly Clone Website , Utilized modern web development
                    practices, such as developing RESTful APIs, working with
                    relational databases, and integrating third-party services,
                    to create scalable and secure web applications
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-xl font-semibold">
                    Bachelor's in Computer Science
                  </h4>
                  <p className="text-gray-600">
                    FAST NUCES Lahore • 2021 - 2025
                  </p>
                  <p className="mt-2">
                    I hold a Bachelor’s degree in Computer Science, where I
                    honed my skills in software development, web technologies,
                    and modern frameworks. Through hands-on projects, I gained
                    expertise in building full-stack applications, implementing
                    authentication systems, and optimizing performance with
                    scalable solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          {" "}
          <Divider />
        </div>
      </section>
    </>
  );
};

export default Resume;
