import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

import styles from "./challengeCoverCard.module.css"
import ChallengeIcons from "@components/components/cards/challengeIcons/challengeIcons";

const ChallengeCoverCard = ({challenge}) => {
    const {coverImage, title, author, impactType, coins, duration} = challenge;

    const handleClick = () => {
        window.location.href = `take/${id}`
    }

    return (
        <Card className={styles["small-challenge-card"]} onClick={handleClick}>
            {/*TODO: check this weird extra padding that comes out of nowhere in CardContent*/}
            <CardContent sx={{padding: "0px"}}>
                <div className={styles["cover-image"]} style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}>
                    <ChallengeIcons duration={duration} impactType={impactType} coins={coins}/>

                    <div className={styles["text-container"]}>
                        <Typography variant="h6" component="div" className="card-title">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" component="div" className="card-author">
                            by <em>{author}</em>
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ChallengeCoverCard;
