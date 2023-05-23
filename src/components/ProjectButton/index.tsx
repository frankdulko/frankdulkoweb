import { type } from "os";
import React from "react";
import "./style.css"
import "../../constants.css"
import image from '../../assets/No_Image_Available.jpg';
import { Link } from "react-router-dom";
import TagList from "../TagList";

type ProjectButtonProps = {
    key: number;
    id: number;
    title: string;
    description: string;
    img?: string;
    tags: string[];
};

const ProjectButton: React.FC<ProjectButtonProps> = ({
    key,
    id,
    title,
    description,
    img,
    tags,
}) => {

    return (
        <Link to={`/project/${id}`}>
            <div className="wrapper" >
                <div className="info">
                    <div className="title" >{title}</div>
                    <div className="description" >{description}</div>
                    <div className="more" >Learn more</div>
                    <TagList tags={tags}/>
                </div>
            </div>
        </Link>
    );
};

export default ProjectButton