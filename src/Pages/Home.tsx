import React from "react"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import TechStacks from "../Components/TechStacks"
import AboutMe from "../Components/AboutMe"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import ExperiencesAndEducations from "../Components/ExperiencesAndEducations"
import Certificate from "../Components/Certificate"


const Home = () => {
  return (
    <>
    <Header /> 
    <Hero />
    <TechStacks />
    <AboutMe />
    <ExperiencesAndEducations />
    <Certificate />
    <Footer />
    {/* 
    <Certificate />
    <Projects />
    <Contact />
     */}
      
    </>
  )
}

export default Home
