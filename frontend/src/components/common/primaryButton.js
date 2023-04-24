import React from 'react';
import styles from "@components/components/common/common.module.css";

const PrimaryButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`${styles["button"]} ${styles[className]} ${styles["small-button"]}`} {...otherProps}>
            {children}
        </button>
    );
};

export default PrimaryButton;
