import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
    const { children, ...otherProps } = props;

    const customStyle = {
        backgroundColor: 'white',
        color: 'black',
        minWidth: '30px',
        height: '40px',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        },
    };

    return (
        <Button style={customStyle} {...otherProps}>
            {children}
        </Button>
    );
};

export default PrimaryButton;
