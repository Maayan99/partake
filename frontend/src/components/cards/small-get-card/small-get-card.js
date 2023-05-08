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
            items-end bg-cover bg-center `}
                 style={{backgroundImage: `url("/assets/PNG/get/${coverImage}")`}} onClick={handleClick}>
                <div className="flex items-center space-x-2 p-2.5
                transition-opacity duration-150 group-hover:opacity-0">
                    <Icon name="coin" className="w-12 h-12"/>
                    <p>{coins}</p>
                </div>
            </div>
            <div className="hidden group-hover:flex opacity-0 min-h-[0px] h-0 group-hover:h-32 p-5
            group-hover:opacity-100 transition-opacity duration-150 group-hover:min-h-[128px]">
                <div>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-sm">{shortDescription}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="flex space-x-2">
                        <span>{left}</span><span className="text-red-500">Left</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2.5">
                        <Icon name="coin" className="w-12 h-12"/>
                        <p>{coins}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}