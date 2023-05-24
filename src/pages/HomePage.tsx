import React from "react";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import ProjectButton from "../components/ProjectButton";
import { projects } from "../projects";
import { features } from "../feature";
import styles from "./style.module.scss";
import '../constants.css'
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import FeaturedCard from "../components/FeaturedCard";

const Bounce = styled.div`animation: 1s ${keyframes`${bounceIn}`} 1`;

const HomePage = ({}) => {

    const featuredList = features.map(feature =>
        <ProjectButton project={feature} key={feature.title} isFeatured={true}/>
      );

    const projectsList = projects.map(project =>
        <ProjectButton project={project} key={project.title} isFeatured={false}/>
      );

    return (
    <div className={styles.App}>
        <div className={styles.welcome}>
            <Bounce><div className={styles.Hi}>HI!</div></Bounce>
            <div className={styles.intro}>My name is <span className={styles.name}>Frank</span></div>
        </div>
        <div className={styles.about}>I am a developer and designer based in Brooklyn, NY. I studied computer engineering at Stony Brook University, and will be graduating with a Master’s degree from New York University’s Interactive Telecommunications Program in May 2023. I have a passion for working in the intersection of art and technology. My experience reflects that of engineering, software, and design, and I am constantly learning new and emerging platforms. I invite you to take a look at some of my work below.</div>
        <div className={styles.featuredList}>{featuredList}</div>
        <div className={styles.projectList}>{projectsList}</div>
        <ContactButton/>
        <Footer/>
    </div>
    );
};

export default HomePage