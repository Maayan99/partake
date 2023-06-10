import {useState} from "react";


const OptionRow = ({option, selected, setSelected}) => {
    const {text, id} = option;

    const handleSelect = (event) => {
        setSelected(id);
    }

    return (
        <div className="flex space-x-2">
            <div className="flex items-center cursor-pointer space-x-3 mb-1" onClick={handleSelect}>
                <input type="radio" checked={selected === id} onChange={handleSelect}/>
                <span className="text-sm">{text}</span>

            </div>
            {text === 'Other:' && <input type="text" className="border h-5"/>}
        </div>
    );
};


export default function Radio({options}) {
    const [selected, setSelected] = useState("");

    const indexedOptions = options.map((option, index) => {
        return {text: option, id: index}
    })

    return (
        <div className="w-full flex flex-col items-start">
            {indexedOptions.map(option => <OptionRow selected={selected} setSelected={setSelected} option={option}/>)}
        </div>
    );
}