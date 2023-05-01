import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import IconButton from "@components/components/common/icon-button";
import CloseIcon from "@mui/icons-material/Close";
import BlueButton from "@components/components/common/blue-button";

export default function CongratsPopUp({display, setDisplay}) {
    return (
        <PopUp display={display}>
            <div className="bg-blue p-4 flex text-white">
                <IconButton onClick={() => setDisplay(false)}>
                    <CloseIcon/>
                </IconButton>
                <h1 className="absolute left-1/2 -translate-x-1/2">Congratulations!</h1>
            </div>
            <div className="p-8 flex flex-col items-center space-y-4">
                <BlueButton onClick={() => {window.location.href = '/take'}}>Take me to more challenges!</BlueButton>
            </div>

        </PopUp>
    )
}