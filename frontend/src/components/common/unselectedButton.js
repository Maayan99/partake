import React from 'react';
import Button from '@mui/material/Button';

const UnselectedButton = (props) => {
    const { children, ...otherProps } = props;

    const customStyle = {
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: 25,
        height: 50,
        padding: "10px 30px 10px 30px",
        font: "Roboto",
        fontSize: 38,
        '&:hover': {
            backgroundColor: "#000000",
        },
    };

    return (
        <Button style={customStyle} {...otherProps}>
            {children}
        </Button>
    );
};

export default UnselectedButton;

