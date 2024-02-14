import React, { useState } from "react";
import styles from "./style.module.css";
import "../../constants.css";
import { PageProps } from "../Page";
import { Link } from "react-router-dom";
import TagList from "../TagList";

const FeaturedCard: React.FC<PageProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.title}>{project.title}</div>
          <div className={styles.content}>
            {project.images ? (
              <img className={styles.photo} src={project.images[0]} alt="" />
            ) : null}
            <div>
              <div className={styles.description}>{project.description}</div>
              <div className={styles.more}>Learn more</div>
            </div>
          </div>
          <TagList tags={project.tags} />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
