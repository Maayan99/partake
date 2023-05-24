import {useState} from "react";
import Icon from "@components/components/common/icon/icon";

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
                className="flex items-center justify-between h-full w-full px-4 py-2
                 text-xl rounded-none focus:outline-none text-start peer"
            >
                {selectedName || selectOptions.placeholder}
                <Icon name="down-arrow" className="h-6"/>
            </button>

            <ul className={`absolute top-14 left-0 w-full px-4 py-4 shadow-lg 
                peer-focus:opacity-100 opacity-0 transition-all duration-300
                border border-1 border-gray-500 border-t-0 bg-light-gray -mt-1 text-xl rounded-none focus:outline-none z-10
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