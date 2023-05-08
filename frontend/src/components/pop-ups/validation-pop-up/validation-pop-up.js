import CloseIcon from '@mui/icons-material/Close';
import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import IconButton from "@components/components/common/icon-button";
import BlueButton from "@components/components/common/blue-button";
import Icon from "@components/components/common/icon/icon";
import {useEffect, useState} from "react";

export default function ValidationPopUp({
                                            currentTask, setCurrentTask, display, setDisplay, validationData,
                                            setDisplayCongratsPopUp, numberOfTasks
                                        }) {
    const {text, type, icon, photoValidationData, numberValidationData} = validationData;


    const typeIsNumber = type === "number";

    const [number, setNumber] = useState(0);
    const [displayedNumber, setDisplayedNumber] = useState(1);


    useEffect(() => {
        const updateInput = () => {
            const numberMultiplied = number * numberValidationData?.multiplier;

            if (displayedNumber !== numberMultiplied) {
                setDisplayedNumber(prev => {
                    const difference = numberMultiplied - prev;

                    const changeBy = difference > 0 ?
                        Math.ceil(difference / 10) :
                        Math.floor(difference / 10);

                    return prev + changeBy;
                });
            } else {
                clearInterval(interval);
            }
        }

        const interval = setInterval(updateInput, 15);

        return (() => clearInterval(interval));
    }, [number, displayedNumber])

    const handleValidate = (e) => {
        e.preventDefault()

        setDisplay(false);

        if (currentTask + 1 === numberOfTasks) {
            setCurrentTask(0);
            setDisplayCongratsPopUp(true);
        } else {
            setCurrentTask(prev => prev + 1);
        }
    };

    const handleNumberChange = (e) => {
        const value = e.target.value;
        const min = numberValidationData?.min;
        const max = numberValidationData?.max;

        if (!min === undefined || !max === undefined) {
            setNumber(0);
            return;
        }
        if (value < min) {
            return;
        }
        if (value > max) {
            return;
        }

        setNumber(e.target.value);
    };

    return (
        <PopUp display={display}>
            <div className="bg-blue p-4 flex text-white">
                <IconButton onClick={() => setDisplay(false)}>
                    <CloseIcon/>
                </IconButton>
                <h1 className="absolute left-1/2 -translate-x-1/2">Validate Task</h1>
            </div>
            <div className="flex flex-col items-center pt-10 space-y-2 text-blue">
                <Icon name={icon} className="h-12 w-12"/>
                {typeIsNumber && <h1 className="text-lg font-bold">You saved:</h1>}
                {typeIsNumber ?
                    <span>{displayedNumber} {numberValidationData?.units}</span>
                    : <span>{photoValidationData?.text}</span>}
            </div>
            <form className="p-8 flex flex-col items-center space-y-4" onSubmit={handleValidate}>
                <h1 className="text-xl">{text}</h1>

                {typeIsNumber ?
                    <div className="flex space-x-2 w-full">
                        <input type="number" className="w-8 text-center h-full border border-blue
                         appearance-none" value={number} onChange={handleNumberChange}/>
                        <input className="w-full bg-light-gray focus:outline-none" type="range"
                               min={numberValidationData?.min} max={numberValidationData?.max}
                               placeholder="Enter number" value={number || 0}
                               onChange={handleNumberChange}/>
                    </div>
                    :
                    <label className="flex justify-center items-center w-full h-32 px-4 transition bg-white
                    border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer
                    hover:border-gray-400 focus:outline-none">
                        <span className="font-medium text-gray">
                            Drop files to Attach, or <span className="text-blue underline">browse</span>
                        </span>
                        <input type="file" className="hidden"/>
                    </label>}

                <BlueButton type="submit">Submit{!typeIsNumber && ' Image'}</BlueButton>
            </form>

        </PopUp>
    )
}