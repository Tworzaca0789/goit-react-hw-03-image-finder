import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

function ImageGallery({images}) {
    return (
        <ul className={styles.gallery}>
    {images.length > 0 && 
    images.map(({id, webformatURL, largeImageURL, tags}) => {
        return (
            <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            />
            );
    })}
    </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
      })
    ),
  };

export default ImageGallery;
