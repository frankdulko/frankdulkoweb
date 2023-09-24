import React from "react";
import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import ProjectButton from "../components/ProjectButton";
import { projects } from "../projects";
import { features } from "../feature";
import styles from "./style.module.scss";
import "../constants.css";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import FeaturedCard from "../components/FeaturedCard";
import MenuButton from "../components/MenuButton";
import SectionEntity from "../components/SectionEntity";
import ChevronDown from "../components/ChevronDown";
import Banner from "../components/Banner/Banner";

const Bounce = styled.div`
  animation: 1s ${keyframes`${bounceIn}`} 1;
`;

const HomePage = ({}) => {
  const featuredList = features.map((feature) => (
    <ProjectButton project={feature} key={feature.title} isFeatured={true} />
  ));

  const projectsList = projects.map((project) => (
    <ProjectButton project={project} key={project.title} isFeatured={false} />
  ));

  return (
    <>
      {/* <Banner /> */}
      <div className={styles.App}>
        {/* <div className={styles.welcome}>
          <Bounce>
            <div className={styles.Hi}>HI!</div>
          </Bounce> */}
        {/* <div className={styles.intro}>
            My name is <span className={styles.name}>Frank</span>
          </div> */}
        {/* <ChevronDown /> */}
        {/* </div> */}
        <div className={styles.about}>
          <span className={styles.Hi}>HI!</span> I am a full stack developer and
          UX engineer based in Brooklyn, NY. I studied computer engineering at
          Stony Brook University, and recently graduated with a Master’s degree
          from New York University’s Interactive Telecommunications Program
          (ITP). With a passion for working at the intersection of art and
          technology, I strive to collaborate with others to deliver engaging
          user experiences. I invite you to take a look at some of my work
          below, and welcome you to connect with me about any questions or
          opportunities.
          <div className={styles.tagLine}>Let's create something together!</div>
        </div>
        {/* <SectionEntity title={"Featured"} /> */}
        <div className={styles.featuredList}>{featuredList}</div>
        {/* <SectionEntity title={"More"} /> */}
        <div className={styles.projectList}>{projectsList}</div>
        {/* <ContactButton /> */}
      </div>
    </>
  );
};

export default HomePage;
