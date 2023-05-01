import React from 'react';

const BlueButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`${className} bg-blue text-white py-2 px-4 rounded-full cursor-pointer
        transition-all duration-300 hover:bg-black`} {...otherProps}>
            {children}
        </button>
    );
};

export default BlueButton;
