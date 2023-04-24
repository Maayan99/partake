import React from 'react';
import {Card, CardContent, Typography, LinearProgress} from '@mui/material';

import styles from "./smallChallengeCard.module.css"
import ChallengeIcons from "@components/components/cards/challengeIcons/challengeIcons";

const SmallChallengeCard = ({challenge}) => {
    const {id, coverImage, title, author, impactType, coins, progress, duration} = challenge;



    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <Card className={styles["small-challenge-card"]} onClick={handleClick}>
            {/*TODO: check this weird extra padding that comes out of nowhere in CardContent*/}
            <CardContent sx={{padding: "0px"}}>
                <div className={styles["cover-image"]} style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}>
                    <ChallengeIcons impactType={impactType} coins={coins} duration={duration}/>

                    <div className={styles["text-container"]}>
                        <Typography variant="h6" component="div" className="card-title">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" component="div" className="card-author">
                            by <em>{author}</em>
                        </Typography>
                    </div>
                </div>
                <LinearProgress variant="determinate" value={progress} className={styles["progress"]} sx={{
                  backgroundColor: '#E5E5E5',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#0082FE'
                  }
                }}/>
            </CardContent>
        </Card>
    );
};

export default SmallChallengeCard;
