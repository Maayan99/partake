import React from 'react';
import styles from './common.module.css';

const UnselectedButton = (props) => {
    const { children, ...otherProps } = props;

    return (
        <button className={`${styles["button"]} ${styles['unselected-button']}`} {...otherProps}>
            {children}
        </button>
    );
};

export default UnselectedButton;

