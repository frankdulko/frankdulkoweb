import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import "../../constants.css";

type ImageEntityProps = {
  source: string;
};

const ImageEntity: React.FC<ImageEntityProps> = ({ source }) => {
  return (
    <div>
      <a href={source} target="_blank" className={styles.container}>
        <img src={source} alt="" className={styles.image} />
      </a>
    </div>
  );
};

export default ImageEntity;
