import React from 'react';
import {Card, CardContent, CardMedia, Typography, LinearProgress} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import styles from "./smallGiveCard.module.css"

const SmallGiveCard = ({give}) => {
    const {coverImage, title, author, activityType, duration, donations, location} = give;

    const getActivityIcon = () => {
        switch (activityType) {
            case 'Field':
                return <PetsIcon style={{color: "sandybrown"}}/>;
            case 'Online':
                return <SignalWifiStatusbar4BarIcon style={{color: "teal"}}/>;
            default:
                return null;
        }
    };

    return (
        <Card className={styles["small-give-card"]}>
            <CardContent>
                <div className={styles["cover-image"]}>
                    <div className={styles["layered-container"]}>
                        <div className={styles["activity-type"]}>
                            {getActivityIcon()}
                            <Typography variant="p"
                                        className={styles["activity-type-text"]}>{activityType} Volunteering</Typography>
                        </div>
                    </div>

                    <div className={styles["layered-text"]}>
                        <Typography variant="h6" component="div" className={styles["title"]}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" component="div" className={styles["author"]}>
                            by <em>{author}</em>
                        </Typography>
                    </div>
                </div>
                <div className={styles["bottom-info"]}>
                    <div className={styles["icon-row"]}>
                        <div className={`${styles["icon"]} ${styles["duration-icon"]}`}>
                            <AccessTimeIcon fontSize="8pt"/>
                            <span className={styles["duration-text"]}>{duration}</span>
                        </div>
                        {donations ?
                            <div className={`${styles["icon"]} ${styles["donations-icon"]}`}>
                                <ShoppingBasketIcon/>
                            </div> : <div/>
                        }
                        <div className={styles["location-container"]}>
                            <LocationOnIcon fontSize="8pt" style={{color: "gray"}}/>
                            <Typography variant="p" color="gray">{location}</Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SmallGiveCard;
