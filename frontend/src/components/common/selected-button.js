
import React from 'react';

const SelectedButton = (props) => {
    const { children, className, ...otherProps } = props;

    return (
        <button className={`${className} bg-black text-white py-2 px-6 rounded-full cursor-pointer text-3xl mx-2 overflow-hidden
       relative isolate before:content-[''] before:h-[20%] before:aspect-square before:bg-blue 
       before:transition-transform before:duration-700 before:opacity-0 hover:before:opacity-100 
         before:absolute before:inset-0 before:m-auto before:rounded-full before:z-[-1] hover:before:scale-[15]`} {...otherProps}>
            {children}
        </button>
    );
};

export default SelectedButton;

