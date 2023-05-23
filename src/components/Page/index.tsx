import { type } from "os";
import React from "react";
import Footer from "../Footer";
import HomeButton from "../HomeButton";
import LinkButton from "../LinkButton";
import './style.css'
import ImageEntity from "../ImageEntity";
import TagList from "../TagList";

type Project = {
    id?: number;
    title?: string;
    description?: string;
    about?: string;
    url?: string;
    cta?: string
    images: string[];
    tags: string[];
}

export type PageProps = {
    project: Project
};

const Page : React.FC<PageProps> = ({
    project
}) => {

    const hasLink = project.url ? true : false

    const linkButton = project.url ? <LinkButton url={project.url} text={project.cta}/> : undefined

    const image = project.images[0] ? <ImageEntity source={project.images[0]}/> : <div></div>


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