import React from 'react';

const WhiteButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`${className} bg-white text-black py-2 px-4 rounded-full cursor-pointer
        transition-all duration-300 hover:bg-blue`} {...otherProps}>
            {children}
        </button>
    );
};

export default WhiteButton;
