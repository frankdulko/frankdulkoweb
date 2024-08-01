import { Link } from 'react-router-dom';
import '../../constants.css';
import { projects } from '../../projects';
import { features } from '../../feature';
import styles from './style.module.scss';

const Footer = ({}) => {
  const projectsList = projects.map((project) => (
    <Link key={project.path} to={`/${project.path}`} className={styles['page-link']}>
      {project.title}
    </Link>
  ));

  return (
    <div className={styles.footer}>
      <div className={styles['footer-bg']}></div>
      <div className={styles['footer-content']}>
        <div className={styles['name-footer']}>Frank Dulko © 2023</div>
        <div className={styles['page-links']}>{projectsList}</div>
      </div>
    </div>
  );
};

export default Footer;
