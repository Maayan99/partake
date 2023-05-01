import CloseIcon from '@mui/icons-material/Close';
import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import IconButton from "@components/components/common/icon-button";
import BlueButton from "@components/components/common/blueButton";

export default function ValidationPopUp({display, setDisplay, question}) {
    const handleValidate =() => {
        setDisplay(false);
    }

    return (
        <PopUp display={display}>
            <div className="bg-blue p-4 flex text-white">
                <IconButton onClick={() => setDisplay(false)}>
                    <CloseIcon/>
                </IconButton>
                <h1 className="absolute left-1/2 -translate-x-1/2">Validate Challenge</h1>
            </div>
            <div className="p-8 flex flex-col items-center space-y-4">
                <h1 className="text-xl">{question}</h1>
                <input className="w-full placeholder:italic resize-none bg-slate-200 rounded-lg p-2" placeholder="Enter text"/>
                <BlueButton onClick={handleValidate}>Validate</BlueButton>
            </div>

        </PopUp>
    )
}