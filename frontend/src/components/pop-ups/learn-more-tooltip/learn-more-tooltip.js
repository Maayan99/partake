import IconButton from "@components/components/common/icon-button";
import Icon from "@components/components/common/icon/icon";
import CloseIcon from "@mui/icons-material/Close";
import {useEffect, useRef} from "react";

export default function LearnMoreTooltip({display, setDisplay, text}) {
    return (
        <>
            {display &&
                <div className="flex absolute text-left bg-white min-w-[300px] min-h-[200px] top-0 left-0 shadow-lg
                 p-4 border border-gray justify-between">
                    <IconButton onClick={() => setDisplay(false)} className="">
                        <CloseIcon/>
                    </IconButton>
                    <p className="absolute left-1/2 top-8 -translate-x-1/2 text-md font-bold">How does it help?</p>
                    <p className="mt-10 text-gray">{text}</p>
                </div>}
        </>
    )
}