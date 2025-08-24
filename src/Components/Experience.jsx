import React from "react";
import unitedlexLogo from "../assets/Images/unitedLexLogo.png";

const experiences = [
  {
    company: "Image Pipeline",
    role: "Frontend Development Intern",
    period: "June 2024 – December 2024",
    location: "Remote",
    details: [
      "Built reusable React components from scratch and collaborated with the backend team to integrate REST APIs into the frontend.",
      "Worked on Stable Diffusion model settings, enabling advanced image generation and inpainting features with a clean user interface.",
      "Integrated a secure payment system using Stripe, fixing issues and improving reliability for faster onboarding and smooth transactions."
    ]
  },
  {
    company: "UnitedLex Pvt Ltd",
    role: "Incident Response Associate",
    period: "April 2025 – July 2025",
    location: "Bengaluru, India",
    logo: unitedlexLogo,
    details: [
      "Collaborated with U.S.-based legal teams on privacy and compliance reviews using Relativity, ensuring adherence to GDPR and HIPAA.",
      "Performed accurate PII/PHI tagging, metadata coding, and case documentation across multiple projects.",
      "Optimized workflows to deliver high-quality litigation support under tight deadlines."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-red-400 mb-10 text-left">
        Work Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800 hover:border-green-400 hover:shadow-green-500/20 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain rounded"
                />
              )}
              <div>
                {/* Role highlighted in green */}
                <h3 className="text-xl font-semibold text-green-400">
                  {exp.role}
                </h3>
                {/* Company stays neutral but readable */}
                <p className="text-gray-200">{exp.company}</p>
                <p className="text-sm text-gray-400">
                  {exp.period} • {exp.location}
                </p>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
              {exp.details?.map((point, i) => (
                <li
                  key={i}
                  className="hover:text-green-300 transition-colors duration-200"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
