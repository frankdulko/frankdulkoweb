import { type } from "os";
import React from "react";
import Footer from "../Footer";
import HomeButton from "../HomeButton";
import LinkButton from "../LinkButton";
import './style.css'
import ImageEntity from "../ImageEntity";
import TagList from "../TagList";
import { Project } from "../../constants";

export type PageProps = {
    project: Project
};

const Page : React.FC<PageProps> = ({
    project
}) => {

    const linkButton = project.url ? <LinkButton url={project.url} text={project.cta}/> : <div></div>

    const image = project.images[0] ? <ImageEntity source={project.images[0]}/> : undefined

    return (
        <div className="page">
            <HomeButton/>
            <div className="project-title">{project?.title}</div>
            {image}
            <div className="project-description">{project?.about}</div>
            {linkButton}
            <Footer/>
        </div>
    );
};

export default Page