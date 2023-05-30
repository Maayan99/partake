import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import {useEffect, useState} from "react";
import Icon from "@components/components/common/icon/icon";
import BlueButton from "@components/components/common/blue-button";
import Multichoice from "@components/components/common/multi-choice/multi-choice";


const CongratsGraphic = ({
                             icon,
                             destinationNumber,
                             multiplier,
                             units,
                             setDisplay,
                             setCurrentTask,
                             currentTask,
                             numberOfTasks,
                             setDisplayCongratsPopUp
                         }) => {
    const [displayedNumber, setDisplayedNumber] = useState(1);

    useEffect(() => {
        const updateInput = () => {
            const numberMultiplied = destinationNumber * multiplier;

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
    }, [destinationNumber, displayedNumber])


    const handleClose = () => {
        setDisplay(false);
        if (currentTask + 1 === numberOfTasks) {
            setDisplayCongratsPopUp(true);
        } else {
            setCurrentTask(prev => prev + 1);
        }
    }

    return (
        <div className="flex flex-col items-center p-6">
            <Icon name={icon} className="h-12 w-12"/>
            <h1 className="font-bold">You saved:</h1>
            <p className="text-center">{displayedNumber}</p>
            <span className="font-bold mb-10">{units}</span>
            <BlueButton onClick={handleClose}>Close</BlueButton>
        </div>
    )
}

const Validation = ({
                        validationData,
                        setDestinationNumber,
                        setShowCongratsGraphic,
                        currentTask,
                        setCurrentTask,
                        numberOfTasks,
                        setDisplayCongratsPopUp,
                        setDisplay,
                    }) => {

    const {text, type, icon, photoValidationData, infoText, numberValidationData, multiValidationData} = validationData;

    const typeIsNumber = type === "number";
    const typeIsText = type === "text";
    const typeIsMulti = type === "multi";
    const typeIsImage = type === "image";
    const typeIsFeedback = type === "feedback";

    const [number, setNumber] = useState(0);

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

    const handleValidate = (e) => {
        e.preventDefault()


        if (typeIsNumber) {
            setDestinationNumber(number);
            setShowCongratsGraphic(true);
        } else {
            setDisplay(false);

            if (currentTask + 1 === numberOfTasks) {
                setDisplayCongratsPopUp(true);
            } else {
                setCurrentTask(prev => prev + 1);
            }
        }
    };


    return (
        <div className={`flex flex-col`}>
            <div className="flex flex-col items-center p-8 space-y-2 text-black">
                <Icon name={icon} className="h-12 w-12 mb-4"/>
                <span className="text-center">{infoText}</span>
            </div>
            <form className="px-8 py-4 flex flex-col items-center space-y-4" onSubmit={handleValidate}>
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
                    : <>
                        {typeIsText ? <input type="text" className="w-full h-8 bg-light-gray px-2"></input> :
                            <>
                                {typeIsMulti ?
                                    <Multichoice options={multiValidationData.options}/> :
                                    <>
                                        {typeIsFeedback ?
                                            <input className="w-full bg-light-gray focus:outline-none" type="range"
                                                   min={0} max={100}/> :
                                            <label className="flex justify-center items-center w-full h-32 px-4 transition bg-white
                    border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer
                    hover:border-gray-400 focus:outline-none">
                        <span className="font-medium text-gray">
                            Drop files to Attach, or <span className="text-blue underline">browse</span>
                        </span>
                                                <input type="file" className="hidden"/>
                                            </label>}
                                    </>
                                }
                            </>
                        }
                    </>
                }

                <BlueButton type="submit">Submit{typeIsImage && ' Image'}</BlueButton>
            </form>
        </div>
    )
}

export default function ValidationPopUp({
                                            currentTask, setCurrentTask, display, setDisplay, validationData,
                                            setDisplayCongratsPopUp, numberOfTasks
                                        }) {
    const {icon, numberValidationData} = validationData;


    const [destinationNumber, setDestinationNumber] = useState(0);
    const [showCongratsGraphic, setShowCongratsGraphic] = useState(false);


    useEffect(() => {
        setShowCongratsGraphic(false);
        setDestinationNumber(0);
    }, [currentTask])


    return (
        <PopUp display={display} setDisplay={setDisplay}
               title={showCongratsGraphic ? 'Congratulations!' : 'Validation'}>
            {!showCongratsGraphic ? <Validation validationData={validationData}
                                                setDestinationNumber={setDestinationNumber}
                                                setShowCongratsGraphic={setShowCongratsGraphic}
                                                currentTask={currentTask}
                                                setCurrentTask={setCurrentTask}
                                                numberOfTasks={numberOfTasks}
                                                setDisplayCongratsPopUp={setDisplayCongratsPopUp}
                                                setDisplay={setDisplay}/>
                : <CongratsGraphic multiplier={numberValidationData?.multiplier}
                                   destinationNumber={destinationNumber}
                                   icon={icon}
                                   units={numberValidationData?.units}
                                   setDisplay={setDisplay}
                                   setCurrentTask={setCurrentTask}
                                   setDisplayCongratsPopUp={setDisplayCongratsPopUp}
                                   numberOfTasks={numberOfTasks}
                                   currentTask={currentTask}/>}
        </PopUp>
    )
}