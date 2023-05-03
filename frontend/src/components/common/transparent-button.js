import React from 'react';

const TransparentButton = (props) => {
    const { children, className, ...otherProps } = props;


    return (
        <button className={`${className} bg-none text-blue rounded-full cursor-pointer
        transition-all duration-300 hover:text-black`} {...otherProps}>
            {children}
        </button>
    );
};

export default TransparentButton;
