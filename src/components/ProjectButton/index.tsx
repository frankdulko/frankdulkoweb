import { type } from "os";
import React from "react";
import styles from './style.module.scss'
import "../../constants.css"
import image from '../../assets/No_Image_Available.jpg';
import { Link } from "react-router-dom";
import TagList from "../TagList";
import { Project } from "../../constants";
import { wrap } from "module";

type ProjectButtonProps = {
    key: number | string | undefined
    isFeatured: boolean
    project: Project
};

const ProjectButton: React.FC<ProjectButtonProps> = ({
    project,
    isFeatured
}) => {

    const image = isFeatured ? <img src={project.images[0]} alt="" /> : undefined

    const award = project.award ? 
        <div className={styles.award}>
            <img className={styles.awardIcon} src="/images/award-wreath.png" alt="" />
            <div className={styles.awardType}>{project.award}</div>
        </div> : undefined

    return (
        <Link to={`/${project.path}`}>
            <div className={`${styles.wrapper} ${isFeatured ? styles.wrapperFeatured : styles.wrapperProject}`}>
                <div className={styles.info}>
                    <div className={styles.title}>{project.title}</div>
                    {image}
                    <div className={styles.description}>{project.description}</div>
                    <div className={styles.more}>Learn more</div>
                    <TagList tags={project.tags}/>
                    {award}
                </div>
            </div>
        </Link>
    );
};

export default ProjectButton