import IconButton from "@components/components/common/icon-button";
import CloseIcon from "@mui/icons-material/Close";
import Icon from "@components/components/common/icon/icon";

export default function PopUp({children, display, title, setDisplay, icon}) {
    return (
        <>
            {display &&
                <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/50" aria-modal="true">
                    <div className="w-[420px] bg-white rounded-lg shadow-lg pt-12
        flex flex-col fixed top-1/2 left-1/2 border border-blue border-b-0 border-l-0 border-r-0 border-t-[20px]
        transform -translate-x-1/2 -translate-y-1/2 z-50">
                        <IconButton className="absolute top-0" onClick={() => setDisplay(false)}>
                            <CloseIcon/>
                        </IconButton>
                        {icon && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 shadow-xl
                         rounded-full">
                            <Icon name={icon} className="h-12"/>
                        </div>}
                        {title && <h1 className="absolute top-9 left-1/2 -translate-x-1/2">{title}</h1>}
                        {children}
                    </div>
                </div>}
        </>
    )
}