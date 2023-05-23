import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import "../../constants.css"

const HomeButton = ({}) => {

    return (
        <Link to='/' className="homeButton">HOME</Link>
    );
};

export default HomeButton