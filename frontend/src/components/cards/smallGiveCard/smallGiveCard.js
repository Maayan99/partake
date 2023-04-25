import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import PrimaryButton from "@components/components/common/primaryButton";
import ParticipantsRow from "@components/components/participantsRow/participantsRow";

const SmallGiveCard = ({give}) => {
    const {coverImage, title, author, activityType, duration, donations, location, endDate} = give;

    const getActivityIcon = () => {
        switch (activityType) {
            case 'Field':
                return <PetsIcon style={{color: "sandybrown"}}/>;
            case 'Online':
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
        <Card className="w-80 h-80 min-w-[320px] rounded-lg shadow-md transition-all duration-150
         hover:scale-110 hover:z-10" elevation={0}>
            {/*TODO: check this weird extra padding that comes out of nowhere in CardContent*/}
            <CardContent sx={{padding: "0px"}}>
                <div className="w-full h-52 rounded-t-lg flex flex-col justify-between" style={{backgroundImage: `url("/assets/PNG/${coverImage}")`}}>
                    <div className="mt-2.5 ml-2.5">
                        <div className="flex bg-white rounded-full w-fit py-1 px-3 items-center">
                            {getActivityIcon()}
                            <p className="ml-2.5 text-xs">{activityType}</p>
                        </div>
                    </div>

                    <div className="text-white ml-2.5 mb-2.5">
                        <h2 className="font-bold text-2xl leading-snug drop-shadow-md">
                            {title}
                        </h2>
                        <p className="font-italics text-xl leading-snug drop-shadow-md">
                            by <em>{author}</em>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="flex justify-around p-2.5">
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col justify-center items-center border-solid border-2
                            border-cyan-500 rounded-full p-1.5 w-9 h-9 text-cyan-500">
                                <AccessTimeIcon fontSize="8pt"/>
                                <p className="text-xs">{duration}</p>
                            </div>
                            {donations ?
                                <div className="flex flex-col justify-center items-center border-solid border-2
                            border-cyan-500 rounded-full p-1.5 w-9 h-9 text-cyan-500">
                                    <ShoppingBasketIcon/>
                                </div> : <div/>
                            }
                        </div>
                        <div className="flex items-center text-gray-500">
                            <LocationOnIcon/>
                            <p className="text-xs">{location}</p>
                        </div>
                        <div className="flex items-center text-gray-500">
                            <CalendarMonthIcon/>
                            <p className="text-xs">{endDate}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <ParticipantsRow/>
                        <PrimaryButton className="m-2.5">Give help</PrimaryButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SmallGiveCard;
