import {useState} from "react";

export default function Dropdown({selectOptions, className}) {
    const [selectedName, setSelectedName] = useState("");

    const [opened, setOpened] = useState(false);

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
        const name = event.target.getAttribute('id');
        selectOptions.handleFunction({target: {value}});

        setSelectedName(name);

        setOpened(false);

    };



    return (
        <div className={`relative ${className} border border-1 border-gray-500 bg-light-gray`}>
            <button
                onClick={() => setOpened(prev => !prev)}
                type="button"
                className="block h-full w-full px-4 py-2
                 text-xl rounded-none focus:outline-none text-start peer"
            >
                {selectedName || selectOptions.placeholder}
            </button>

            <ul className={`absolute top-12 left-0 w-full px-4 py-4 shadow-lg 
                peer-focus:opacity-100 opacity-0 transition-all duration-300
                 border-gray-500 bg-light-gray text-xl rounded-none focus:outline-none z-10
                 ${!opened && 'hidden'}`}>
                {options.filter((option) => option.value !== selectOptions.value).map((option) => (
                    <li
                        key={option.id}
                        id={option.name}
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