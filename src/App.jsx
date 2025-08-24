import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Experience from "./Components/Experience";

import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";


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
