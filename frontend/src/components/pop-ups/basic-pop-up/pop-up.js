import IconButton from "@components/components/common/icon-button";
import CloseIcon from "@mui/icons-material/Close";
import Icon from "@components/components/common/icon/icon";

export default function PopUp({children, display, title, setDisplay, icon}) {
    const handleClose = () => {
        window.scroll(0, 0);
        setDisplay(false);
    };


    return (
        <>
            {display &&
                <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/50" aria-modal="true">
                    <div className="w-[420px] bg-white rounded-lg shadow-lg items-center pt-2 max-h-[90%] overflow-auto
        flex flex-col fixed top-1/2 left-1/2 border border-blue border-b-0 border-l-0 border-r-0 border-t-[20px]
        transform -translate-x-1/2 -translate-y-1/2 z-50">
                        <IconButton className="absolute top-0 left-0" onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                        {/*icon && <div className="-translate-y-6 drop-shadow-2xl
                        bg-white p-4 border-blue border
                         rounded-full">
                            <Icon name={icon} className="h-10 aspect-square"/>
                        </div>*/}
                        {title && <h1>{title}</h1>}
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </div>}
        </>
    )
}