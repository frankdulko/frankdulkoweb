import ProjectButton from '../components/ProjectButton';
import styles from './style.module.scss';
import '../constants.css';
import LinkButton from '../components/LinkButton';

const HomePage = ({ projects }: { projects: any }) => {
  const projectsList = projects.map((project: any) => (
    <ProjectButton project={project} key={project.title} />
  ));

  return (
    <div className={styles.App}>
      <div className={styles.about}>
        <div className={styles.Hi}>Hello</div>
        I’m a full-stack developer and design technologist with a passion for bringing art and
        technology together to create engaging user experiences. After earning my Bachelor’s degree
        in Computer Engineering at Stony Brook University, I went on to complete a Master’s at NYU’s
        Interactive Telecommunications Program, where I honed my skills in rapid prototyping,
        creative coding, and user-centered design. Along the way, I’ve led end-to-end app
        development, built intuitive interfaces, and optimized performance for a range of startups
        and organizations. I invite you to explore my work below and get in touch with any questions
        or opportunities. I’m always excited to collaborate and keep pushing what’s possible with
        digital experiences.
        <div style={{ height: 64 }}></div>
        <LinkButton url={'mailto:frankdulko@gmail.com'} text={"Let's create something together!"} />
      </div>
      <div className={styles.projectList}>{projectsList}</div>
    </div>
  );
};

export default HomePage;
