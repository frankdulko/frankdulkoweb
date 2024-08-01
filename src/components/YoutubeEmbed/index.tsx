import React from 'react';
import styles from './style.module.scss';

const YoutubeEmbed = ({ embedId }: { embedId: String }) => (
  <div className={styles['video-responsive']}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
