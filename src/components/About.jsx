import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Divider from "./Divider";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className=" libre-baskerville-regular text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/zain.jpg"
              alt="Zain Ali"
              className="rounded-lg shadow-lg w-54 h-80 object-cover mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600"
          >
            <p className="merriweather-regular">
              Hi, I’m Zain Ali, a passionate and skilled <strong>MERN</strong>{" "}
              Stack Web Developer dedicated to building modern, user-friendly,
              and scalable web applications. With expertise in{" "}
              <strong>React.js, Node.js, Next.js</strong>, and database
              management, I specialize in creating seamless full-stack solutions
              that deliver exceptional user experiences.
            </p>
            <p className="mb-6 merriweather-regular">
              I have a strong command of <strong>frontend and backend</strong>{" "}
              technologies, including <strong>RESTful APIs</strong>,
              authentication systems, and state management. My development
              process is driven by clean, efficient code and a focus on
              delivering responsive, <strong>performance-optimized</strong>{" "}
              applications. Whether it’s designing intuitive interfaces or
              building robust server-side logic, I strive to bring ideas to life
              with <strong>precision and creativity</strong>.
            </p>
            <p className="merriweather-regular">
              I’m a firm believer in <strong>continuous learning</strong> and{" "}
              <strong>staying updated </strong>
              with the latest technologies and industry best practices.
              Combining technical expertise with a collaborative mindset, I aim
              to contribute to innovative projects that make a meaningful
              impact. <strong>Let’s work together</strong> to turn visions into
              reality! 🚀
            </p>
          </motion.div>
        </div>
      </div>
      <div>
        {" "}
        <Divider />
      </div>
    </section>
  );
};

export default About;
