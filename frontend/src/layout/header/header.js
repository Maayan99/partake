import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Icon from "@components/components/common/icon/icon";

const Header = () => {

    const profilePhotoURL = `/assets/PNG/profile-images/profile_image_1.jpeg`;


    const handleProfileClick = () => {
        window.location.href = `/dashboard/ashiukhdsaj`;
    }

    return (
        <div className="flex items-center justify-between p-4">
            <p>partake</p>

            <div className='flex items-center space-x-7'>
                <div className="flex items-center space-x-7">
                    <p>My impact</p>
                    <div className="flex items-center space-x-3">
                        <Icon name="environmental" className="h-5"/>
                        <p>1000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Icon name="social-blue" className="h-5"/>
                        <p>2000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Icon name="wellness" className="h-5"/>
                        <p>491</p>
                    </div>
                </div>

                <div className="flex mr-10">
                    <p>Partake Coins</p>
                    <StarIcon className="text-blue"/>
                    <p>100</p>
                </div>
                <img  onClick={handleProfileClick}
                    src={profilePhotoURL} alt="Profile" className="w-14 h-14 rounded-full
                outline outline-2 outline-offset-1 outline-blue object-cover transition-all duration-150
                hover:scale-110"
                />
            </div>
        </div>
    );
};

export default Header;
