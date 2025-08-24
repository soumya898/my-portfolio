import AboutSection from "./Componenets/AboutSection";
import ContactSection from "./Componenets/ContactSection";
import Experience from "./Componenets/Experience";

import HeroSection from "./Componenets/HeroSection";
import Navbar from "./Componenets/Navbar";
import ProjectsSection from "./Componenets/ProjectsSection";


const App = () => {
  return (
<div className="min-h-screen" style={{ backgroundColor: 'rgba(3, 7, 18, 1)' }}>

      
    <Navbar/>
     <HeroSection/> 
       <AboutSection/>
    
       <Experience/>
       <ProjectsSection/>
       <ContactSection/>
      


    </div>
  )
}

export default App;
