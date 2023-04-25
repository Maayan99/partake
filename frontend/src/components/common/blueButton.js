import React from 'react';

const PrimaryButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`${className} bg-cyan-500 text-white py-2 px-4 rounded-full cursor-pointer
        transition-all duration-300 hover:bg-black`} {...otherProps}>
            {children}
        </button>
    );
};

export default PrimaryButton;
