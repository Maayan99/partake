import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
    const { children, ...otherProps } = props;

    const customStyle = {
        backgroundColor: 'black',
        color: 'white',
        minWidth: '30px',
        height: '40px',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: 'blue',
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
