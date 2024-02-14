import { type } from "os";
import React from "react";
import Footer from "../Footer";
import HomeButton from "../HomeButton";
import LinkButton from "../LinkButton";
import styles from "./style.module.scss";
import ImageEntity from "../ImageEntity";
import TagList from "../TagList";
import { Project } from "../../constants";

export type PageProps = {
  project: Project;
};

const Page: React.FC<PageProps> = ({ project }) => {
  const linkButton = project.url ? (
    <LinkButton url={project.url} text={project.cta} />
  ) : (
    <div></div>
  );

  const image = project.images ? (
    <ImageEntity source={project.images[0]} />
  ) : undefined;

  return (
    <div className={styles.page}>
      <div className={styles["project-title"]}>{project?.title}</div>
      <div className={styles["project-sub"]}>{project.description}</div>
      {image}
      <div className={styles["project-description"]}>{project?.about}</div>
      {linkButton}
    </div>
  );
};

export default Page;
