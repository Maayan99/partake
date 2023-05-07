import React from "react";

export default function NavButton(props) {
    const { children, className, ...otherProps } = props;

    return (
        <button className={`${className} text-black text-left py-2 px-6 
        rounded-full cursor-pointer text-lg mx-2 `} {...otherProps}>
            {children}
        </button>
    );
};