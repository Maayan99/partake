import React from 'react';
import {Card, CardContent, LinearProgress} from '@mui/material';

import ChallengeIcons from "@components/components/cards/challengeIcons/challengeIcons";
import BlueButton from "@components/components/common/blueButton";
import ParticipantsRow from "@components/components/participantsRow/participantsRow";
import ProgressBar from "@components/components/progress-bar/progress-bar";

const SmallChallengeCard = ({take}) => {
    const {id, coverImage, title, author, impactType, coins, progress, duration, shortDescription} = take;

    const userProgress = 50;

    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <div className="bg-white group w-72 h-[200px] min-w-[288px] rounded-t-lg rounded-b-none transition-all duration-150
         hover:h-[280px] hover:-mb-20 hover:scale-110 hover:rounded-lg hover:z-10 text-xs" onClick={handleClick}>
                <div className="w-full h-[190px] rounded-t-lg flex flex-col justify-between"
                     style={{backgroundImage: `
                     linear-gradient(to bottom, rgba(2,0,36,0.4) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0) 66%, rgba(0,0,0,0.65) 100%),
                      url("/assets/PNG/${coverImage}")`}}>
                    <ChallengeIcons impactType={impactType} coins={coins} duration={duration}/>

                    <div className="text-white ml-2.5 mb-2.5">
                        <h2 className="font-bold text-2xl leading-snug drop-shadow-md">
                            {title}
                        </h2>
                        <p className="font-italics text-xl leading-snug drop-shadow-md">
                            by <em>{author}</em>
                        </p>
                    </div>
                </div>
                <ProgressBar percentage={userProgress}/>
                <div className="opacity-0 flex flex-col content-center transition-all duration-100 group-hover:opacity-100">
                    <p className="text-center m-1.5">{shortDescription}</p>
                    <div className="flex justify-between px-2.5">
                        <ParticipantsRow/>
                        <BlueButton className='small-button'>Take Challenge</BlueButton>
                    </div>
                </div>
        </div>
    );
};

export default SmallChallengeCard;
