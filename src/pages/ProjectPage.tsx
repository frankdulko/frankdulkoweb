import React from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { projects } from "../projects";

const ProjectPage = ({}) => {

    let {title} = useParams();

    console.log(title)

    let index = title ? Number(title) : 0;

    let project = projects[index];

    return (
        <Page project={project}/>
    );
};

export default ProjectPage