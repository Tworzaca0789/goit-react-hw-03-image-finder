import React from "react";
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({more}) {
    return (
        <button className={styles.Button} type="button" onClick={more}>
            Load more
        </button>
    );
}

Button.propTypes = {
    more: PropTypes.func.isRequired,
};
export default Button;