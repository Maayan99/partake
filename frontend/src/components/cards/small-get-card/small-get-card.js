import React from "react";
import Icon from "@components/components/common/icon/icon";

export default function SmallGetCard({get, className}) {
    const {id, coverImage, coins, title, shortDescription, left} = get;


    const handleClick = () => {
        window.location.href = `get/${id}`
    }

    return (
        <div className={`${className} bg-white w-full h-full rounded-lg flex flex-col group
         transition-transform duration-150 hover:shadow-xl hover:z-10 hover:scale-110 hover:-translate-y-4
         hover:h-[calc(100%_+_128px)] hover:-mb-32`}>
            <div className={`w-full h-full group-hover:rounded-b-none rounded-lg flex flex-col justify-end 
            items-end bg-cover bg-center relative`}
                 style={{backgroundImage: `url("/assets/PNG/get/${coverImage}")`}} onClick={handleClick}>
                <div className="flex items-center p-2.5 absolute right-2.5 bottom-2.5
                transition-opacity duration-150 group-hover:opacity-0">
                    <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 w-12 h-12 text-blue">
                        <Icon name="partake-coins" className="w-2.5 mt-1 mb-1"/>
                        <span className="text-xs -mt-1 -p-1">{coins}</span>
                    </div>
                </div>
            </div>
            <div className="hidden group-hover:flex opacity-0 min-h-[0px] h-0 group-hover:h-32 p-5 relative
            group-hover:opacity-100 transition-opacity duration-150 group-hover:min-h-[128px]">
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