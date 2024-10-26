import React from 'react';
import styles from './style.module.scss';
import '../../constants.css';
import TagList from '../TagList';
import { Project } from '../../constants';
import Link from 'next/link';
import { client } from '@/sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

type ProjectButtonProps = {
  key: number | string | undefined;
  project: Project;
};

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const ProjectButton = ({ project }: { project: any }) => {
  const postImageUrl = project.image ? urlFor(project.image)?.url() : null;

  const image = postImageUrl ? (
    <img className={styles.projectImage} src={postImageUrl} alt="" />
  ) : undefined;

  const award = project.award ? (
    <div className={styles.award}>
      <img className={styles.awardIcon} src="/images/award-wreath.png" alt="" />
      <div className={styles.awardType}>{project.award}</div>
    </div>
  ) : undefined;

  return (
    <Link href={project.slug.current}>
      <div className={`${styles.wrapper} ${styles.wrapperProject}`}>
        <div className={styles.info}>
          <div className={styles.title}>{project.title}</div>
          {image}
          <div className={styles.description}>{project.description}</div>
          <div className={styles.more}>Learn more</div>
          <TagList tags={project.tags} />
          {award}
        </div>
      </div>
    </Link>
  );
};

export default ProjectButton;
