export default function PopUp({children, display}) {
    return (
        <>
            {display &&
                <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/50" aria-modal="true">
                    <div className="min-h-[380px] w-[420px] bg-white rounded-lg shadow-lg
        flex flex-col fixed top-1/2 left-1/2 overflow-hidden
        transform -translate-x-1/2 -translate-y-1/2 z-50">
                        {children}
                    </div>
                </div>}
        </>
    )
}