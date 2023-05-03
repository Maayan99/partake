import React from 'react';

export default function Icon ({name, className, alt}) {
    return <img src={`/assets/SVG/${name}.svg`} className={className} alt={alt || name}/>
}