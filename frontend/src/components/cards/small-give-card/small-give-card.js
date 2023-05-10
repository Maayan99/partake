import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import PrimaryButton from "@components/components/common/primary-button";
import ParticipantsRow from "@components/components/participants-row/participants-row";
import Icon from "@components/components/common/icon/icon";

const SmallGiveCard = ({give}) => {
    const {id, coverImage, title, author, activityType, duration, donations, location, endDate, participants} = give;

    const handleClick = () => {
        window.location.href = `give/${id}`
    }

    const activityTypeDictionary =
        {
            online: 'Online Volunteering',
            field: 'Field Volunteering',
            donation: 'Donation',
            goods_donation: 'Goods Donation'
        };

    return (
        <div className="bg-white  w-80 h-80 min-w-[320px] rounded-lg shadow-md transition-all duration-150
         hover:scale-110 hover:z-10 hover:shadow-lg hover:-translate-y-3" onClick={handleClick}>
                <div className="w-full h-52 rounded-t-lg flex flex-col justify-between"
                     style={{backgroundImage: `linear-gradient(to bottom, transparent 10%, rgb(0,0,0,0.65) 100%), url("/assets/PNG/give/${coverImage}")`}}>
                    <div className="mt-2.5 ml-2.5">
                        <div className="flex bg-white rounded-full w-fit py-1 px-3 items-center">
                            <Icon name={activityType} className="h-5"/>
                            <p className="ml-2.5 text-xs">{activityTypeDictionary[activityType]}</p>
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

                <div className="px-4">
                    <div className="flex justify-between my-2 space-x-2">
                        {(donations || duration) && <div className="flex gap-2 items-center">
                            {duration && <div className="flex flex-col justify-center items-center border-solid border-2
                            border-blue rounded-full p-1.5 w-9 h-9 text-blue">
                                <AccessTimeIcon fontSize="8pt"/>
                                <p className="text-xs">{duration}</p>
                            </div>}
                            {donations &&
                                <div className="flex flex-col justify-center items-center border-solid border-2
                            border-blue rounded-full p-1.5 w-9 h-9 text-blue">
                                    <Icon name="reward"/>
                                </div>}
                        </div>}
                        {location && <div className="flex items-center text-gray space-x-2">
                            <Icon name="location"/>
                            <p className="text-xs">{location}</p>
                        </div>}
                        {endDate && <div className="flex items-center text-gray">
                            <CalendarMonthIcon/>
                            <p className="text-xs">{endDate}</p>
                        </div>}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        {participants ? <ParticipantsRow/> : <div></div>}
                        <PrimaryButton className="mx-2.5 -mr-1.5">Give help</PrimaryButton>
                    </div>
                </div>
        </div>
    );
};

export default SmallGiveCard;
