
import React from 'react';
import Button from '@mui/material/Button';
import styles from "@components/components/common/common.module.css";

const SelectedButton = (props) => {
    const { children, ...otherProps } = props;

    return (
        <button className={`${styles["button"]} ${styles['selected-button']}`} {...otherProps}>
            {children}
        </button>
    );
};

export default SelectedButton;

