import React from 'react';

import TakeIcons from "@components/components/take-icons/take-icons";
import ParticipantsRow from "@components/components/participants-row/participants-row";
import BlueButton from "@components/components/common/blue-button";
import ProgressBar from "@components/components/progress-bar/progress-bar";

const LargeTakeCard = ({take}) => {
    const {id, coverImage, title, author, impact, coins, participants, progress, duration, shortDescription} = take;

    const impactType = impact.type;

    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <div className="bg-white group w-72 h-[420px] min-w-[288px] rounded-t-lg rounded-b-none transition-all duration-150
         hover:h-[516px] hover:-mb-24 hover:scale-110 hover:-translate-y-6 hover:rounded-lg hover:shadow-md hover:z-10 text-xs" onClick={handleClick}>
            <div className="w-full h-[410px] rounded-t-lg flex flex-col justify-between"
                 style={{backgroundImage: `linear-gradient(to bottom, transparent 40%, rgb(0,0,0,0.65) 100%), url("/assets/PNG/take/${coverImage}")`}}>
                <TakeIcons duration={duration} impactType={impactType} coins={coins}/>
                <div className="text-white ml-3.5 mb-3.5">
                    <h2 className="font-bold text-2xl leading-7 drop-shadow-md">
                        {title}
                    </h2>
                    <p className="font-italics text-xl leading-snug drop-shadow-md">
                        by <em>{author}</em>
                    </p>
                </div>
            </div>
            <ProgressBar percentage={progress}/>
            <div className="hidden opacity-0 group-hover:flex flex-col content-center transition-all duration-100 group-hover:opacity-100">
                <p className="text-center m-2.5">{shortDescription}</p>
                <div className="flex justify-between mx-2.5">
                    <ParticipantsRow participants={participants}/>
                    <BlueButton className="text-sm small-button">Take Challenge</BlueButton>
                </div>
            </div>
        </div>
    );
};

export default LargeTakeCard;
