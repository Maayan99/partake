import React from 'react';

import TakeIcons from "@components/components/take-icons/take-icons";
import Icon from "@components/components/common/icon/icon";


const activityTypeDictionary =
    {
        online: 'Online Volunteering',
        field: 'Field Volunteering',
        donation: 'Donation',
        'goods-donation': 'Goods Donation',
        fundraising: 'Fundraising',
    };

const GiveCoverCard = ({give}) => {
    const {coverImage, title, author, impactType, coins, duration, sponsors, displayRewardIcon, activityType} = give;

    return (
        <div
            className="w-full min-h-[420px] h-full  rounded-lg text-xs
            flex flex-col justify-between bg-cover bg-center"
            style={{backgroundImage: `
            linear-gradient(to bottom, rgba(2,0,36,0.4) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0) 66%, rgba(0,0,0,0.65) 100%),
            url("/assets/PNG/give/${coverImage}")`}}>
            <div className="mt-2.5 ml-2.5">
                <div className="flex bg-white rounded-full w-fit py-1 px-2 items-center">
                    <Icon name={activityType === 'fundraising' ? 'donation' : activityType} className="h-5"/>
                    <p className="ml-2.5 text-sm">{activityTypeDictionary[activityType]}</p>
                </div>
            </div>
            <div className="text-white ml-2.5 mb-2.5">
                <h2 className="font-bold text-2xl leading-7 drop-shadow-md">
                    {title}
                </h2>
                <p className="font-italics text-xl leading-snug drop-shadow-md">
                    by <em>{author}</em>
                </p>
                {sponsors && <div className='flex space-x-2'>
                    {sponsors.array.map(sponsor => <img key={sponsor.id}
                                                  src={`/assets/PNG/logos/square/logo-s-${sponsor.image}.png`} alt={sponsor.name}
                    className="rounded-full object-cover h-10 w-10 bg-white"/>)}
                </div>}
            </div>
        </div>
    );
};

export default GiveCoverCard;
