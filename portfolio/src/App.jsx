import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Project from './Project'
import Skills from './Skills'
import './App.css'
import Navbar from './Navbar'
import { useThemeContext } from './Context/ThemeContext'
import AboutPage from './Home/AboutPage'
import HomePage from './Home/HomePage'

function App() {
  const {theme}=useThemeContext();
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

 
  const scrollToSection = (section) => {
    if (section === "home") homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "project") projectsRef.current.scrollIntoView({ behavior: "smooth" });
    
    if (section === "skills") skillsRef.current.scrollIntoView({ behavior: "smooth" });
    //if (section === "contact") contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
   
    <main className={`${theme==='light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
   <Navbar scrollToSection={scrollToSection}/>
   <section ref={homeRef}>
    <HomePage/>
   </section>
   <section ref={aboutRef}>
    <AboutPage/>
   </section>
   <section ref={projectsRef}>

    <Project />
   </section>
   <section ref={skillsRef}>

    <Skills />
   </section>
    </main>
  
  )
}

export default App
