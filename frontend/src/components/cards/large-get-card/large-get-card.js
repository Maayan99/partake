import React from "react";
import Icon from "@components/components/common/icon/icon";

export default function LargeGetCard({get, className}) {
    const {id, coverImage, coins, title, shortDescription, left} = get;


    const handleClick = () => {
        window.location.href = `get/${id}`
    }

    return (
        <div className={`${className} bg-white w-96 h-[500px] rounded-lg flex flex-col group 
         transition-transform duration-150 hover:shadow-xl hover:z-10 hover:scale-110 hover:-translate-y-4`}>
            <div className={`w-full h-full group-hover:rounded-b-none rounded-lg flex flex-col justify-end bg-bottom 
            items-end bg-cover bg-center relative`}
                 style={{backgroundImage: `url("/assets/PNG/get/${coverImage}")`}} onClick={handleClick}>
            </div>
            <div className="flex min-h-[0px] h-44 p-5 relative">
                <div>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-sm">{shortDescription}</p>
                </div>
                <div className="flex flex-col justify-between items-center w-max">
                    <div className="flex space-x-2">
                        <span>{left}</span><span className="text-red-500">Left</span>
                    </div>
                    <div className="flex items-center p-2.5 absolute right-2.5 bottom-2.5">
                        <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 w-12 h-12 text-blue">
                            <Icon name="partake-coins" className="w-2.5 mt-1 mb-1"/>
                            <span className="text-xs -mt-1 -p-1">{coins}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}