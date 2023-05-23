import { Link } from "react-router-dom";
import "../../constants.css";
import { projects } from "../../projects";
import "./style.css";

const Footer = ({}) => {

    const projectsList = projects.map(project =>
        <Link key={project.id} to={`/project/${project.id}`} className="page-link">{project.title}</Link>
      );

    return (
        <div className="footer">
            <div className="name-footer">Frank Dulko © 2023</div>
            <div className="page-links">{projectsList}</div>
        </div>
    );
};

export default Footer