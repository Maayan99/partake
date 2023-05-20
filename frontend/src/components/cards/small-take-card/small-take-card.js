import React from 'react';

import TakeIcons from "@components/components/take-icons/take-icons";
import BlueButton from "@components/components/common/blue-button";
import ParticipantsRow from "@components/components/participants-row/participants-row";
import ProgressBar from "@components/components/progress-bar/progress-bar";

const SmallTakeCard = ({take}) => {
    const {id, coverImage, title, author, impact, coins, progress, duration, shortDescription, participants} = take;

    const impactType = impact?.type;

    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <div className={`bg-white group w-72 h-[200px] min-w-[288px] rounded-t-lg rounded-b-none transition-all duration-150
         hover:h-[296px] hover:-mb-24 hover:scale-110 hover:-translate-y-4 hover:rounded-lg hover:shadow-md hover:z-10 text-xs`} onClick={handleClick}>
                <div className="w-full h-[190px] rounded-t-lg flex flex-col justify-between p-2"
                     style={{backgroundImage: `
                     linear-gradient(to bottom, rgba(2,0,36,0) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0) 66%, rgba(0,0,0,0.65) 100%),
                      url("/assets/PNG/take/${coverImage}")`}}>
                    <TakeIcons impactType={impactType} coins={coins} duration={duration}/>

                    <div className="text-white ml-2.5 mb-2.5">
                        <h2 className="font-bold text-2xl leading-snug drop-shadow-md">
                            {title}
                        </h2>
                        <p className="font-italics text-xl leading-snug drop-shadow-md">
                            by <em>{author}</em>
                        </p>
                    </div>
                </div>
                <ProgressBar percentage={progress}/>
                <div className="hidden opacity-0 group-hover:flex flex-col content-center transition-all
                 duration-100 group-hover:opacity-100 ">
                    <p className="text-center m-2.5">{shortDescription}</p>
                    <div className="flex justify-between mx-2.5">
                        <ParticipantsRow participants={participants}/>
                        <BlueButton className='text-sm small-button'>Take Challenge</BlueButton>
                    </div>
                </div>
        </div>
    );
};

export default SmallTakeCard;
