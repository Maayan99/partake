import React from 'react';

const PrimaryButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`bg-black text-white rounded-full cursor-pointer
        transition-all duration-300 hover:bg-blue px-4 py-2 ${className}
        `} {...otherProps}>
            {children}
        </button>
    );
};

export default PrimaryButton;
