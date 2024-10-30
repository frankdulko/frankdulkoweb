import '../../constants.css';
import styles from './style.module.scss';
import Link from 'next/link';

const Footer = ({ projects }: { projects: any }) => {
  const projectsList = projects?.map((project: any) => (
    <Link key={project._id} href={project.slug.current} className={styles['page-link']}>
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
