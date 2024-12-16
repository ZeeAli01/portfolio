import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_nofci8r",
        "template_v0m3gzn",
        formRef.current,
        "VtKnDg1V0uVB7JI-r"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="libre-baskerville-regular text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-primary mr-4" />
                <span>+92 309 93232 14</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-4" />
                <span>sheikh.zain0110@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-primary mr-4" />
                <a
                  href="https://github.com/ZeeAli01"
                  className="hover:text-primary"
                  target="_blank"
                >
                  github.com/ZeeAli01
                </a>
              </div>
              <div className="flex items-center">
                <FaSquareUpwork className="text-primary mr-4" />
                <a
                  href="https://www.upwork.com/freelancers/~017686f398a196b6d0?mp_source=share"
                  className="hover:text-primary"
                  target="_blank"
                >
                  upwork.com/freelancers/Zain-Ali
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-primary mr-4" />
                <a
                  href="https://www.linkedin.com/in/zain-ali-1763bb247/"
                  className="hover:text-primary"
                  target="_blank"
                >
                  linkedin.com/in/zain-ali-1763bb247
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Zain Ali"
                  id="name"
                  required
                  className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="sheikh.zain0110@gmail.com"
                  required
                  className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Hey Zain! Let's connect to discuss a project"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
