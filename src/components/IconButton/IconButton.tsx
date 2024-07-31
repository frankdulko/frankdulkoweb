import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export enum IconType {
  linkedin = "linkedin",
  github = "github",
  conatct = "contact",
}

const IconButtonDetails = {
  linkedin: {
    definition: faLinkedin,
    url: "https://www.linkedin.com/in/frankdulko",
  },
  github: {
    definition: faSquareGithub,
    url: "https://github.com/frankdulko",
  },
  contact: {
    definition: faEnvelope,
    url: "mailto:frankdulko@gmail.com",
  },
};

type IconButtonProps = {
  type: IconType;
};

export const IconButton = (props: IconButtonProps) => {
  const { type } = props;
  return (
    <a href={IconButtonDetails[type].url} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={IconButtonDetails[type].definition}
        size="2xl"
        style={{ color: "white" }}
      />
    </a>
  );
};
