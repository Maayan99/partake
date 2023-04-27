import React from 'react';

const UnselectedButton = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <button className={`${className} bg-white text-black py-2 px-6 rounded-full cursor-pointer
        transition-all duration-300 hover:bg-blue text-3xl mx-2`} {...otherProps}>
            {children}
        </button>
    );
};

export default UnselectedButton;

