import React from "react";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import ProjectButton from "../components/ProjectButton";
import { projects } from "../projects";
import { feature } from "../feature";
import '../App.css';
import '../constants.css'
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import FeaturedCard from "../components/FeaturedCard";

const HomePage = ({}) => {

    const featureCard = <FeaturedCard project={feature}/>

    const projectsList = projects.map(project =>
        <ProjectButton key={project.id} id={project.id} title={project.title} description={project.description} tags={project.tags}/>
      );

    const Bounce = styled.div`animation: 1s ${keyframes`${bounceIn}`} 1`;

    return (
    <div className="App">
        <div className="welcome">
            <Bounce><div className='Hi'>HI!</div></Bounce>
            <div className='intro' >My name is <span className='name'>Frank</span></div>
        </div>
        <div className='about'>I am a developer and designer based in Brooklyn, NY. I studied computer engineering at Stony Brook University, and will be graduating with a Master’s degree from New York University’s Interactive Telecommunications Program in May 2023. I have a passion for working in the intersection of art and technology. My experience reflects that of engineering, software, and design, and I am constantly learning new and emerging platforms. I invite you to take a look at some of my work below.</div>
        <div className="projectList">{projectsList}</div>
        <ContactButton/>
        <Footer/>
    </div>
    );
};

export default HomePage