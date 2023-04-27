import React from 'react';

const PrimaryButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`bg-black text-white ${className} rounded-full cursor-pointer
        transition-all duration-300 hover:bg-blue`} {...otherProps}>
            {children}
        </button>
    );
};

export default PrimaryButton;
