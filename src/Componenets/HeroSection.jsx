import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer 🧑‍💻",
  "Frontend Developer ",
  "React Developer ⚛️",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // cycle through roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background floating blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading with gradient text */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
          style={{ fontFamily: "CormorantGaramond, serif" }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Hello, I’m <span className="text-white drop-shadow-lg">Soumya</span>
        </motion.h1>

        {/* Rotating Roles */}
        <div className="h-12 mb-8 text-xl sm:text-2xl text-gray-300 font-mono flex justify-center items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
         “Frontend isn’t just code — it’s the way people look ,touch & feel your product. I focus on building interfaces that are simple, fast, and enjoyable.”
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
        <div className="flex flex-wrap gap-4 justify-center">
  <a
    href="#projects"
    className="px-5 py-2 rounded-md font-medium text-gray-200 border border-gray-500 
               hover:bg-gray-200 hover:text-black 
               transition-colors duration-300"
  >
    View My Work
  </a>

  <a
    href="#contact"
    className="px-5 py-2 rounded-md font-medium text-gray-200 border border-gray-500 
               hover:bg-gray-200 hover:text-black 
               transition-colors duration-300"
  >
    Let’s Connect
  </a>
</div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
