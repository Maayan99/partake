import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

import ChallengeIcons from "@components/components/cards/challengeIcons/challengeIcons";

const ChallengeCoverCard = ({take}) => {
    const {coverImage, title, author, impactType, coins, duration} = take;

    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <Card className="w-[430px] h-[420px] min-w-[430px] rounded-none rounded-b-none transition-all duration-150
         text-xs" onClick={handleClick}>
            {/*TODO: check this weird extra padding that comes out of nowhere in CardContent*/}
            <CardContent sx={{padding: "0px"}}>
                <div className="w-full h-[420px] flex flex-col justify-between bg-cover"
                     style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}>
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
            </CardContent>
        </Card>
    );
};

export default ChallengeCoverCard;
