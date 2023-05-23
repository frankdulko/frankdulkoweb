import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css'
import "../../constants.css"

type ImageEntityProps = {
    source: string
};

const ImageEntity: React.FC<ImageEntityProps> = ({
    source
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleClick = () => {
        isFocused ? setIsFocused(false) : setIsFocused(true);
        console.log(isFocused);
    }

    return (
        <a href={source} target="_blank" className={styles.container}>
            <img src={source} alt="" className={styles.image}/>
        </a>
    );
};

export default ImageEntity