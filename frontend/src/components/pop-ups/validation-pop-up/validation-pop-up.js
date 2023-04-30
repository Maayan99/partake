import {useEffect} from "react";
import CloseIcon from '@mui/icons-material/Close';
import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import IconButton from "@components/components/common/icon-button";

export default function ValidationPopUp({display, setDisplay}) {
    return (
        <PopUp display={display}>
            <div className="bg-blue p-4 flex text-white">
                <IconButton onClick={() => setDisplay(false)}>
                    <CloseIcon/>
                </IconButton>
                <h1 className="absolute left-1/2 -translate-x-1/2">Validate Challenge</h1>
            </div>
            
        </PopUp>
    )
}