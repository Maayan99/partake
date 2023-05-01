import React from 'react';
import BlueButton from '@components/components/common/blue-button'

const UnloggedHeader = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <p>partake</p>


            <a href="/login">
                <BlueButton>Login</BlueButton>
            </a>
        </div>
    );
};

export default UnloggedHeader;
