import React from "react";
import Icon from "@components/components/common/icon/icon";

export default function SmallGetCard({get}) {
    const {id, coverImage, coins} = get;


    const handleClick = () => {
        window.location.href = `get/${id}`
    }

    return (
            <div className="w-full h-96 rounded-lg flex flex-col justify-end items-end bg-cover bg-center
            transition-all duration-150 hover:scale-110 hover:shadow-md hover:z-10"
                 style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}  onClick={handleClick}>
                <div className="flex items-center space-x-2 p-2.5">
                    <Icon name="coin" className="w-12 h-12"/>
                    <p>{coins}</p>
                </div>
            </div>
    );
}