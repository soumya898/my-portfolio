import { useState, useEffect, useRef } from "react";

// ==================
// About Section Data
// ==================
export const aboutData = {
  title: "About Me",
   subtitle:"Here’s a glimpse into my world.",
description: [
  "Believe in your knowledge and keep learning and building, the rest will fall into place.",
  "My name is Soumya Ranjan Nayak having degree with computer application  as a passionate front-end developer i mainly working with React.js. javaSript",
  "I got interested in coding because of the creative power to build things people can use and enjoy.",
  "I love making webapps that are simple, fast, and easy for users.",
  "I focus on writing clean, optimized code and keep improving with every project.",
  "Right now, I’m also exploring the next generation of AI and how it can change the future.",
  "I believe in staying curious, working hard, and growing a little every day."
],


  skills: [
    "JavaScript (ES6+)", "React.js", "Redux", "Tailwind CSS",
    "Node.js", "Express.js", "MongoDB", "SQL",
    "Firebase", "Git & GitHub", "REST API", "Netlify", "Vercel"
  ]
};

// ==================
// Typing + Erase Loop
// ==================
export const useTypingLoop = (lines, typingSpeed = 50, pause = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout;

    if (!deleting && charIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentLine[charIndex]);
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, typingSpeed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setLineIndex((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex, lines, typingSpeed, pause]);

  return displayedText;
};

// ==================
// Intersection Hook
// ==================
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.3, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView];
};
