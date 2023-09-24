import React from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconButton, IconType } from "../IconButton/IconButton";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className={styles["banner-container"]}>
      <Link to={"/"}>
        <div className={styles.name}>Frank Dulko</div>
      </Link>
      <div className={styles["icon-list"]}>
        <IconButton type={IconType.linkedin} />
        <IconButton type={IconType.github} />
        <IconButton type={IconType.conatct} />
      </div>
    </div>
  );
}
