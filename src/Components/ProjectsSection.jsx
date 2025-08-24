import React from "react";
import { FaCoins, FaCamera, FaDrumstickBite, FaSearch, FaFilePdf, FaBook, FaCode } from "react-icons/fa";

// Helper to render project cards
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-800">
      <div className={`text-4xl mb-4 ${project.color}`}>{project.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1 rounded font-medium text-sm ${
              link.primary ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            } transition`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

// Project data
const projects = [
  {
    title: "CryptoSprint",
    description:
      "A comprehensive cryptocurrency tracking platform with real-time market insights, interactive price visualization, and portfolio management. Features secure authentication, Stripe integration, and optimized performance.",
    tech: ["React.js", "Firebase", "Chart.js", "Express.js", "MongoDB", "Stripe API"],
    links: [
      { label: "Live Demo", url: "https://cryptosprint1.vercel.app/", primary: true },
      { label: "GitHub", url: "https://github.com/soumya898/cryptoSprint", primary: false },
    ],
    icon: <FaCoins />,
    color: "text-yellow-400", // golden
  },
  {
    title: "Vibesnap",
    description:
      "A modern social media feed application with Google authentication, multi-image posting, real-time updates, and bio management. Features infinite scroll, lazy loading, and optimized state management.",
    tech: ["React.js", "Firebase", "Firestore", "Context API", "Google Auth"],
    links: [
      { label: "Live Demo", url: "https://social-media-feeds-iota.vercel.app", primary: true },
      { label: "GitHub", url: "https://github.com/soumya898/Social-Media-Feeds", primary: false },
    ],
    icon: <FaCamera />,
    color: "text-blue-400",
  },
  {
    title: "Cluckadoo (KFC Clone)",
    description:
      "A complete e-commerce clone of KFC featuring user authentication, product catalog, shopping cart, checkout system, order tracking, and payment gateway integration. Fully responsive across all devices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Payment Gateway", "Responsive Design"],
    links: [
      { label: "Live Demo", url: "https://cluckadoo.netlify.app/", primary: true },
      { label: "GitHub", url: "https://github.com/soumya898/KFC-Clone-", primary: false },
    ],
    icon: <FaDrumstickBite />,
    color: "text-red-400",
  },

  {
    title: "VectorShift Assessment",
    description:
      "A full-stack technical assessment featuring reusable node abstraction, dynamic text logic, unified styling, and backend integration with DAG validation. Built with React.js, Tailwind CSS, and FastAPI.",
    tech: ["React.js", "Tailwind CSS", "FastAPI", "JavaScript", "Python"],
    links: [
      { label: "GitHub", url: "https://github.com/soumya898/Vectorshift-Node", primary: false },
    ],
    icon: <FaCode />,
    color: "text-indigo-400",
  },
  {
    title: "PDF Reader App",
    description:
      "An advanced PDF reader application enabling users to search, view, and navigate through PDF documents seamlessly. Features pagination controls, social sharing capabilities, and responsive design optimized for all devices.",
    tech: ["React.js", "PDF.js", "API Integration", "Responsive Design", "Social Sharing"],
    links: [
      { label: "Live Demo", url: "https://react-pdf-reader-zeta.vercel.app", primary: true },
      { label: "GitHub", url: "https://github.com/soumya898/react-pdf-reader", primary: false },
    ],
    icon: <FaFilePdf />,
    color: "text-red-600",
  },
  {
    title: "React Dictionary App",
    description:
      "A comprehensive dictionary application with Redux state management, featuring word search, detailed definitions, phonetics, and audio pronunciations. Includes search history and dynamic routing capabilities.",
    tech: ["React.js", "Redux", "React Router", "Dictionary API", "CSS3"],
    links: [
      { label: "Live Demo", url: "https://stellar-bunny-572cb2.netlify.app/", primary: true },
      { label: "GitHub", url: "https://github.com/soumya898/Dictionary-App-", primary: false },
    ],
    icon: <FaBook />,
    color: "text-green-400",
  },  {
    title: "Planet Search",
    description:
      "A sophisticated Next.js web application featuring dynamic planet search capabilities, advanced filtering system, and URL sharing functionality. Built with Redux for state management and Ant Design for responsive UI components.",
    tech: ["Next.js", "Redux Toolkit", "Ant Design", "CSS Modules", "API Integration"],
    links: [
      { label: "Live Demo", url: "https://next-planets-zeta.vercel.app/", primary: true },
      { label: "GitHub", url: "https://github.com/soumya898/Next-Planets", primary: false },
    ],
    icon: <FaSearch />,
    color: "text-purple-400",
  },
  
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
      <p className="text-gray-300 mb-10">Showcasing my latest work and technical expertise</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
