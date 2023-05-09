import IconButton from "@components/components/common/icon-button";
import CloseIcon from "@mui/icons-material/Close";

export default function PopUp({children, display, title, setDisplay}) {
    return (
        <>
            {display &&
                <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/50" aria-modal="true">
                    <div className="w-[420px] bg-white rounded-lg shadow-lg
        flex flex-col fixed top-1/2 left-1/2 overflow-hidden
        transform -translate-x-1/2 -translate-y-1/2 z-50">
                        <div className="bg-blue p-4 flex text-white">
                            <IconButton onClick={() => setDisplay(false)}>
                                <CloseIcon/>
                            </IconButton>
                            <h1 className="absolute left-1/2 -translate-x-1/2">{title}</h1>
                        </div>
                        {children}
                    </div>
                </div>}
        </>
    )
}