import CloseIcon from '@mui/icons-material/Close';
import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import IconButton from "@components/components/common/icon-button";
import BlueButton from "@components/components/common/blue-button";
import Icon from "@components/components/common/icon/icon";
import {useEffect, useState} from "react";

export default function ValidationPopUp({setCurrentTask, display, setDisplay, question}) {
    const [input, setInput] = useState('');
    const [previousInput, setPreviousInput] = useState('0');
    const [displayedValue, setDisplayedValue] = useState(0);

    useEffect(() => {
        const updateInput = () => {
            let parsedCurrentInput = parseInt(input) || 0;
            let parsedPreviousInput = parseInt(previousInput);

            if (parsedPreviousInput !== parsedCurrentInput) {
                setPreviousInput(prev => {
                    let parsedInt = parseInt(prev);

                    if (parsedCurrentInput > parsedInt) {
                        parsedInt++;
                    } else {
                        parsedInt--;
                    }
                    return (parsedInt.toString());
                });
            }
        }

        const interval = setInterval(updateInput, 10);

        return (() => clearInterval(interval));
    }, [input, previousInput])

    const handleValidate =() => {
        setDisplay(false);
        setCurrentTask(prev => prev + 1);
    }

    return (
        <PopUp display={display}>
            <div className="bg-blue p-4 flex text-white">
                <IconButton onClick={() => setDisplay(false)}>
                    <CloseIcon/>
                </IconButton>
                <h1 className="absolute left-1/2 -translate-x-1/2">Validate Challenge</h1>
            </div>
            <div className="flex flex-col items-center pt-10 text-blue">
                <Icon name="carbon" className="h-12 w-12"/>
                <h1 className="text-lg font-bold">You saved:</h1>
                <p>{parseInt(previousInput)*4} grams</p>
            </div>
            <div className="p-8 flex flex-col items-center space-y-4">
                <h1 className="text-xl">{question}</h1>
                <input className="w-full placeholder:italic bg-slate-200 rounded-lg p-2"
                       placeholder="Enter text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <BlueButton onClick={handleValidate}>Validate</BlueButton>
            </div>

        </PopUp>
    )
}