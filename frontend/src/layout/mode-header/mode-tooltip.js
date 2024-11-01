import {useState} from "react";

export default function ModeTooltip({isAdmin, updateIsAdmin}) {
    const [display, setDisplay] = useState(false);

    const handleToggle = () => {
        if (!isAdmin) {
            sessionStorage.setItem('isAdmin', "true");
            updateIsAdmin();
        } else {
            sessionStorage.setItem('isAdmin', "false");
            updateIsAdmin();
        }
    }

    return (
        <>
            <div
                className={`fixed right-4 bottom-4 bg-black backdrop-blur-md bg-opacity-60 py-2 px-2 rounded-lg z-50 items-center
                 flex space-x-2 transition-all duration-300 isolate hover:scale-105 group shadow-xl`}
                onMouseLeave={() => setDisplay(false)}
                onMouseEnter={() => setDisplay(true)}>

                {display ?
                    <label
                        className={`relative inline-flex items-center cursor-pointer opacity-0 ${display && 'opacity-100'} transition-all duration-300`}>
                        <input type="checkbox" checked={isAdmin} className="sr-only peer" onClick={handleToggle}/>
                        <div
                            className="w-11 h-6 bg-light-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                            rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
                            after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:cursor-pointer
                             after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue"></div>
                        <span className="ml-2 text-sm text-white">Set Mode</span>
                    </label>
                    : isAdmin ? <span className="text-white text-sm">Admin Mode</span> :
                        <span className="text-white text-sm">Employee Mode</span>}
            </div>
        </>
    )
}