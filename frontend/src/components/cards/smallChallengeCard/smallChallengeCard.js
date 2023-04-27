import React from 'react';
import {Card, CardContent, Typography, LinearProgress} from '@mui/material';

import ChallengeIcons from "@components/components/cards/challengeIcons/challengeIcons";
import BlueButton from "@components/components/common/blueButton";
import ParticipantsRow from "@components/components/participantsRow/participantsRow";

const SmallChallengeCard = ({take}) => {
    const {id, coverImage, title, author, impactType, coins, progress, duration, shortDescription} = take;

    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <Card className="w-72 h-[200px] min-w-[288px] rounded-t-lg rounded-b-none transition-all duration-150
         hover:h-[280px] hover:-mb-20 hover:scale-110 hover:rounded-lg hover:z-10 text-xs" onClick={handleClick}>
            {/*TODO: check this weird extra padding that comes out of nowhere in CardContent*/}
            <CardContent sx={{padding: "0px"}}>
                <div className="w-full h-[190px] rounded-t-lg flex flex-col justify-between"
                     style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}>
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
                <LinearProgress variant="determinate" value={progress} className="w-full h-2.5" sx={{
                    backgroundColor: '#E5E5E5',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#0082FE'
                    }
                }}/>
                <div className="flex flex-col content-center">
                    <p className="text-center m-1.5">{shortDescription}</p>
                    <div className="flex justify-between px-2.5">
                        <ParticipantsRow/>
                        <BlueButton className='small-button'>Take Challenge</BlueButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SmallChallengeCard;
