import React, { useEffect, useState } from 'react'
import AboutSection from './AboutSection'
import ExperienceParent from './ExperienceParent'
import ViewFullResume from './ViewFullResume'
import ProjectParent from './ProjectParent'
import ViewProjectAchive from './ViewProjectAchive'
import Footer from './Footer'

const RightSide = ({getDataFromRightSideComp}) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      const experienceSection = document.getElementById("experience-section");
      const projectsSection = document.getElementById("projects-section");

      const scrollPosition = window.scrollY + window.innerHeight / 2;
        // console.log("aboutSection",aboutSection);
        // console.log("experienceSection",experienceSection);
        // console.log("projectsSection",projectsSection);
      if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
        setActiveSection("projects");
        // console.log("line 24");
      } else if (experienceSection && scrollPosition >= experienceSection.offsetTop) {
        setActiveSection("experience");
        // console.log("line 27");

      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection("about");
        // console.log("line 31");

      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);


getDataFromRightSideComp(activeSection)
return (
    <>
        <AboutSection activeSection={activeSection}/>
        <ExperienceParent />
        <ViewFullResume/>
        <ProjectParent />
        <ViewProjectAchive/>
        <Footer/>
    </>
  )
}

export default RightSide
