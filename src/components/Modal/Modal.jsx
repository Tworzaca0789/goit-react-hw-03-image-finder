import React, {Component} from "react";
import styles from './Modal.module.css';
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = (e) => {
        if(e.code === "Escape") {
            this.props.onClose();
        }
    };
    handleOverlay = (e) => {
        if (e.currentTarget === e.target){
            this.props.onClose();
        }
    };

    render(){
        const {largeImageURL, tags} = this.props;

        return createPortal(
            <div className={styles.Overlay} onClick={this.handleOverlay}>
  <div className={styles.modal}>
    <img src={largeImageURL} alt={tags} />
  </div>
</div>,
modalRoot
        );
    }   
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}
export default Modal;