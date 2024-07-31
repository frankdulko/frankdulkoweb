import React from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { projects } from "../projects";
import { features } from "../feature";
import { Project } from "../constants";


const ProjectPage = ({}) => {

    const {path} = useParams()
    
    let index = path ? projects.findIndex((project) => project.path == path) : -1

    let page = index > -1 ? <Page project={projects[index]} /> : undefined

    if (page == undefined){
        index = features.findIndex((feature) => feature.path == path)
        page = <Page project={features[index]} />;
    }

    return (
        <>
            {page}
        </>
    );
};

export default ProjectPage