import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

import ChallengeIcons from "@components/components/cards/challengeIcons/challengeIcons";

const ChallengeCoverCard = ({take}) => {
    const {coverImage, title, author, impactType, coins, duration} = take;

    return (
        <div
            className="w-full min-h-[420px] h-full  rounded-lg text-xs
            flex flex-col justify-between bg-cover bg-center"
            style={{backgroundImage: `
            linear-gradient(to bottom, rgba(2,0,36,0.4) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0) 66%, rgba(0,0,0,0.65) 100%),
            url("/assets/PNG/${coverImage}")`}}>
            <ChallengeIcons duration={duration} impactType={impactType} coins={coins}/>
            <div className="text-white ml-2.5 mb-2.5">
                <h2 className="font-bold text-2xl leading-snug drop-shadow-md">
                    {title}
                </h2>
                <p className="font-italics text-xl leading-snug drop-shadow-md">
                    by <em>{author}</em>
                </p>
            </div>
        </div>
    );
};

export default ChallengeCoverCard;
