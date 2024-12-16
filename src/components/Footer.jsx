import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaSquareUpwork } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Why Me", to: "why-me" },
    { name: "Projects", to: "projects" },
    { name: "Resume", to: "resume" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zain Ali</h3>
            <p className="text-gray-400">
              Full Stack Web Developer specializing in creating beautiful and
              functional web applications.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ZeeAli01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/zain-ali-1763bb247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~017686f398a196b6d0?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaSquareUpwork size={24} />
              </a>
              <a
                href="mailto:sheikh.zain0110@example.com"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zain Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
