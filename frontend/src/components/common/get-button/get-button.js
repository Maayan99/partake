import React from 'react';

const GetButton = (props) => {
    const { children, className, selected, ...otherProps} = props;

    return (
        <button className={`${className} ${selected ? 'bg-black text-white' : 'bg-white text-black'} py-2 px-6 
        border-black border-2 rounded-full cursor-pointer text-xl 
        `} {...otherProps}>
            {children}
        </button>
    );
};

export default GetButton;

