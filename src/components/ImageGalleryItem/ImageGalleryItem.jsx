import React, { Component } from "react";
import Modal from "../Modal/Modal";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';


class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const {showModal} = this.state;
        const {webformatURL, tags, largeImageURL} = this.props;

        return (
            <li className={styles.galleryItem}>
            <img className={styles.galleryItem_image}
            onClick={this.toggleModal}
            src={webformatURL}
             alt={tags}
              />
              
              {showModal && (
                <Modal 
                largeImageURL={largeImageURL}
                tags={tags}
                onClose={this.toggleModal}
                />
              )}
            </li>
        );
    }
}

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

export default ImageGalleryItem;