import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import "../../constants.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

type ImageEntityProps = {
  source: string;
  images?: string[];
};

const ImageEntity: React.FC<ImageEntityProps> = ({ source, images }) => {
  const imageGalleryItems: ReactImageGalleryItem[] | undefined = images
    ? images.map((element) => {
        return { original: element, originalWidth: 200 };
      })
    : undefined;

  return (
    <div>
      {imageGalleryItems ? (
        <ImageGallery
          items={imageGalleryItems}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      ) : undefined}
      {/* <a href={source} target="_blank" className={styles.container}>
        <img src={source} alt="" className={styles.image} />
      </a> */}
    </div>
  );
};

export default ImageEntity;
