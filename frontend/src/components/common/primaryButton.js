import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
    const { children, ...otherProps } = props;

    const customStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        // ...
    };

    return (
        <Button style={customStyle} {...otherProps}>
            {children}
        </Button>
    );
};

export default PrimaryButton;
