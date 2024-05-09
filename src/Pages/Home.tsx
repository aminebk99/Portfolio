import React from "react"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import TechStacks from "../Components/TechStacks"
import AboutMe from "../Components/AboutMe"
import Certificate from "../Components/Certificate"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import ExperiencesAndEducations from "../Components/ExperiencesAndEducations"
import Certif from "../Components/Certif"


const Home = () => {
  return (
    <>
    <Header /> 
    <Hero />
    <AboutMe />
    <ExperiencesAndEducations />
    <Certif />
    <Footer />
    {/* <TechStacks />
    <Certificate />
    <Projects />
    <Contact />
     */}
      
    </>
  )
}

export default Home
