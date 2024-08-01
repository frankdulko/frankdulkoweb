import { bounceIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import ProjectButton from '../components/ProjectButton';
import { projects } from '../projects';
import styles from './style.module.scss';
import '../constants.css';
import LinkButton from '../components/LinkButton';

const Bounce = styled.div`
  animation: 1s ${keyframes`${bounceIn}`} 1;
`;

const HomePage = ({}) => {
  const projectsList = projects.map((project) => (
    <ProjectButton project={project} key={project.title} />
  ));

  return (
    <div className={styles.App}>
      <div className={styles.about}>
        <span className={styles.Hi}>HI!</span> I am a full stack developer and UX engineer based in
        Brooklyn, NY. I studied computer engineering at Stony Brook University, and recently
        graduated with a Master’s degree from New York University’s Interactive Telecommunications
        Program (ITP). With a passion for working at the intersection of art and technology, I
        strive to collaborate with others to deliver engaging user experiences. I invite you to take
        a look at some of my work below, and welcome you to connect with me about any questions or
        opportunities.
        <div style={{ height: 64 }}></div>
        <LinkButton url={'mailto:frankdulko@gmail.com'} text={"Let's create something together!"} />
      </div>
      <div className={styles.projectList}>{projectsList}</div>
    </div>
  );
};

export default HomePage;
