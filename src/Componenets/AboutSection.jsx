import React from "react";
import { aboutData, useTypingLoop, useInView } from "../utils/helper";
import Soumya from "../assets/Images/Soumya.jpg";

const AboutSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const typedText = useTypingLoop(aboutData.description, 40, 2000);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-6 lg:px-16 overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(3,7,18,0.95), rgba(10,25,50,0.9))",
      }}
    >
      {/* Floating Decorative Shapes */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left: Image */}
        <div
          className={`w-80 lg:w-96 flex-shrink-0 transition-all duration-1000 ${
            isInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
            <img
              src={Soumya}
              alt="Soumya Nayak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div
          className={`flex-1 space-y-4 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Header */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "serif" }}
            >
            {aboutData. subtitle}
            </h2>
             
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mb-6 rounded-full"></div>
          </div>

          {/* Description (Alag Box with Typing Effect) */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-3 text-gray-300 text-base leading-relaxed min-h-[100px]">
            <span>{typedText}</span>
            <span className="animate-pulse text-blue-400">|</span>
          </div>

          {/* Object Style Box */}
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-gray-400 text-xs">about-me.js</span>
            </div>

            <div className="text-gray-300 overflow-x-auto">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-yellow-300">developer</span> = {"{"}
              <br />
              <span className="ml-4 text-green-400">name</span>:{" "}
              <span className="text-orange-300">"Soumya Ranjan Nayak"</span>,
              <br />
              <span className="ml-4 text-green-400">role</span>:{" "}
              <span className="text-orange-300">"Fronted  Developer"</span>,
              <br />
              <span className="ml-4 text-green-400">passion</span>:{" "}
              <span className="text-orange-300">"Creating Digital Magic"</span>,
              <br />
              <span className="ml-4 text-green-400">skills</span>:{" "}
              <span className="text-orange-300">
                "{aboutData.skills.join(", ")}"
              </span>
              ,<br />
              <span className="ml-4 text-green-400">currentStatus</span>:{" "}
              <span className="text-orange-300">"Available for Work"</span>,
              <br />
              <span className="ml-4 text-green-400">contact</span>:{" "}
              <span className="text-orange-300">
                "Let's build something amazing!"
              </span>
              <br />
              {"};"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
