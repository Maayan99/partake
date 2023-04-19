
import React from 'react';
import Button from '@mui/material/Button';

const SelectedButton = (props) => {
    const { children, ...otherProps } = props;

    const customStyle = {
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: 25,
        height: 50,
        padding: "10px 30px 10px 30px",
        font: "Roboto",
        fontSize: 38,
        '&:hover': {
            backgroundColor: "#ffffff",
        },
    };

    return (
        <Button style={customStyle} {...otherProps}>
            {children}
        </Button>
    );
};

export default SelectedButton;

