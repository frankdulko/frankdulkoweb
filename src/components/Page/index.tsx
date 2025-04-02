import React from 'react';
import LinkButton from '../LinkButton';
import styles from './style.module.scss';
import ImageEntity from '../ImageEntity';
import YoutubeEmbed from '../YoutubeEmbed';
import { Project } from '@/sanity/sanity.types';
import { urlFor } from '@/sanity/functions';
import ImageCarousel from '../ImageCarousel';

export type PageProps = {
  project: Project;
};

const Page: React.FC<PageProps> = ({ project }) => {
  const linkButton = project.url ? (
    <LinkButton url={project.url} text={project.cta} />
  ) : (
    <div></div>
  );

  const projectImageUrl = project.image ? urlFor(project.image)?.url() : null;

  const image = projectImageUrl ? <ImageEntity source={projectImageUrl} /> : undefined;

  const video = project.videoId ? <YoutubeEmbed embedId={project.videoId} /> : undefined;

  const body = project.body
    ? project.body.map((block) =>
        block.children ? (
          <div key={block._key} className={styles['project-description']}>
            {block.children[0].text}
          </div>
        ) : undefined
      )
    : undefined;

  const renderImages = () => {
    return (
      project.images &&
      project.images.map((image) => {
        const imageUrl = urlFor(image)?.url();
        return imageUrl && <ImageEntity source={imageUrl} />;
      })
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles['project-title']}>{project.title}</div>
      <div className={styles['project-sub']}>{project.description}</div>
      {(project.images?.length ?? 0) > 0 && <ImageCarousel images={{ images: project.images }} />}
      {body}
      {linkButton}
      {video}
    </div>
  );
};

export default Page;
