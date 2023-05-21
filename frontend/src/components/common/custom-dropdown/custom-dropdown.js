import {useState} from "react";

export default function Dropdown({selectOptions, className}) {

    let options = selectOptions.options;

    if (selectOptions.placeholder) {
        options =
            [
                {
                    id: 'jaosiffasdkjljados',
                    value: '',
                    name: selectOptions.placeholder,
                },
                ...selectOptions.options,
            ]
    }
    const handleOptionClick = (event) => {
        const value = event.target.getAttribute("value");
        selectOptions.handleFunction({target: {value}});
    };

    return (
        <div className={`relative ${className}`}>
            <button
                type="button"
                className="block h-full w-full px-4 py-2 border border-1 border-gray-500 bg-light-gray
                 text-xl rounded-none border-r-0 focus:outline-none text-start peer"
            >
                {selectOptions.value || selectOptions.placeholder}
            </button>

            <ul className={`absolute top-14  left-0 w-full px-4 py-4 shadow-lg 
                peer-focus:opacity-100 opacity-0 transition-all duration-300
                 border-gray-500 bg-light-gray text-xl rounded-none focus:outline-none z-10`}>
                {options.filter((option) => option.value !== selectOptions.value).map((option) => (
                    <li
                        key={option.id}
                        value={option.value}
                        onClick={handleOptionClick}
                    >
                        {option.name}
                    </li>
                ))}
            </ul>

            <select
                key={selectOptions.id}
                onChange={selectOptions.handleFunction}
                value={selectOptions.value}
                className="hidden"
            >
                {selectOptions.options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}