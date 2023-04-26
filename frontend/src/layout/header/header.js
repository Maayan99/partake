import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import StarIcon from '@mui/icons-material/Star';

const Header = () => {
    const profilePhotoURL = 'https://unsplash.it/200'; // Replace with the user's profile photo URL later

    return (
        <div className="flex items-center justify-between p-4">
            <p>partake</p>

            <div className='flex items-center space-x-7'>
                <div className="flex items-center space-x-3">
                    <p>My impact</p>
                    <div className="flex items-center space-x-3">
                        <PublicIcon className="text-blue"/>
                        <p>1000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <PeopleIcon className="text-blue"/>
                        <p>2000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <MonitorHeartIcon className="text-blue"/>
                        <p>491</p>
                    </div>
                </div>

                <div className="flex mr-10">
                    <p>Partake Coins</p>
                    <StarIcon className="text-blue"/>
                    <p>100</p>
                </div>
                <img src={profilePhotoURL} alt="Profile" className="w-10 h-10 rounded-full
                outline outline-2 outline-offset-1 outline-blue"
                />
            </div>
        </div>
    );
};

export default Header;
