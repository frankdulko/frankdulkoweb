import React, { useState } from 'react';
import styles from './style.module.scss';

type SectionEntityProps = {
    title: string
};

const SectionEntity : React.FC<SectionEntityProps> = ({
    title
}) => {

  return (
    <div className={styles.section}>
        <div className={styles.bar}></div>
        <div className={styles.sectionTitle}>{title}</div>
    </div>
  );
};

export default SectionEntity;
