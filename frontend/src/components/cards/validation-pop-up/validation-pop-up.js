import {useEffect} from "react";
import {Accessible} from "@mui/icons-material";
import BlueButton from "@components/components/common/blueButton";

export default function ValidationPopUp({display, setDisplay}) {

    useEffect(() => {

        if (display) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
        return () => document.body.classList.remove('overflow-hidden')
    }, []);

    return (
        <>
            {display &&
                <div className=" w-screen h-screen fixed top-0 left-0 z-50 bg-black/50" aria-modal="true">
                    <div className="h-2/3 w-2/3 bg-white rounded-lg p-4 shadow-lg
        flex flex-col justify-center items-center fixed top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2 z-50">
                        <BlueButton onClick={() => setDisplay(false)}>Disable</BlueButton>
                    </div>
                </div>}
        </>
    )
}