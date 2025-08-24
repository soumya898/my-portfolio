// ContactSection.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s connect! Feel free to reach out through any platform below.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl mb-10">
          <a
            href="https://github.com/soumya898"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/soumyanyk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/soumynyk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:soumyaranjannayak0140@gmail.com"
            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer integrated here */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Soumya Ranjan Nayak. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
