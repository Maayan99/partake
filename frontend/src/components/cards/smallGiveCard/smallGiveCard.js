import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import styles from "./smallGiveCard.module.css"
import PrimaryButton from "@components/components/common/primaryButton";

const SmallGiveCard = ({give}) => {
    const {coverImage, title, author, activityType, duration, donations, location, endDate} = give;

    const getActivityIcon = () => {
        switch (activityType) {
            case 'Field Volunteering':
                return <PetsIcon style={{color: "sandybrown"}}/>;
            case 'Online Volunteering':
                return <SignalWifiStatusbar4BarIcon style={{color: "teal"}}/>;
            case 'Goods Donation':
                return <ShoppingBasketIcon style={{color: "red"}}/>
            case 'Fundraising':
                return <MonetizationOnIcon style={{color: "red"}}/>
            default:
                return null;
        }
    };

    return (
        <Card className={styles["small-give-card"]} elevation={0}>
            {/*TODO: check this weird extra padding that comes out of nowhere in CardContent*/}
            <CardContent sx={{padding: "0px"}}>
                <div className={styles["cover-image"]} style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}>
                    <div className={styles["layered-container"]}>
                        <div className={styles["activity-type"]}>
                            {getActivityIcon()}
                            <Typography variant="p"
                                        className={styles["activity-type-text"]}>{activityType}</Typography>
                        </div>
                    </div>

                    <div className={styles["layered-text"]}>
                        <Typography variant="h6" component="div" className="card-title">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" component="div" className="card-author">
                            by <em>{author}</em>
                        </Typography>
                    </div>
                </div>
                <div className={styles["bottom-info"]}>
                    <div className={styles["top-row"]}>
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
                        </div>
                        <div className={styles["location-container"]}>
                            <LocationOnIcon style={{color: "gray"}}/>
                            <p className={styles["location-date-text"]}>{location}</p>
                        </div>
                        <div className={styles["date-container"]}>
                            <CalendarMonthIcon style={{color: "gray"}}/>
                            <p className={styles["location-date-text"]}>{endDate}</p>
                        </div>
                    </div>
                    <div className={styles["bottom-row"]}>
                        <div className={styles["participants"]}>

                        </div>
                        <PrimaryButton className={styles["give-help-button"]}>Give help</PrimaryButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SmallGiveCard;
