import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Icon from "@components/components/common/icon/icon";

const Header = () => {

    const profilePhotoURL = `/assets/PNG/profile-images/profile_image_1.jpeg`;


    const handleProfileClick = () => {
        window.location.href = `/dashboard/ashiukhdsaj`;
    }

    return (
        <div className="flex items-center justify-between py-4 px-8">
              <Icon name="logo" className="h-8 mb-2"/>

            <div className='flex items-center'>
                <div className="flex items-center space-x-7 mr-10">
                    <p className="font-medium">My impact</p>
                    <div className="flex items-center space-x-3">
                        <Icon name="environmental" className="h-5"/>
                        <p>1000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Icon name="social" className="h-5"/>
                        <p>2000</p>
                    </div> 
                </div>

                <div className="flex space-x-3 mr-14">
                    <p className="font-medium">Partake Coins</p>
                    <Icon name="partake-coins-small" className="h-5 mt-0.5"/>
                    <p>100</p>
                </div>
                <img  onClick={handleProfileClick}
                    src={profilePhotoURL} alt="Profile" className="w-12 h-12 rounded-full
                outline outline-2 outline-offset-1 outline-blue object-cover transition-all duration-150
                hover:scale-110"
                />
            </div>
        </div>
    );
};

export default Header;
