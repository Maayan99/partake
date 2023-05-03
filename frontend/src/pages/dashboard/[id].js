import BlueButton from "@components/components/common/blue-button";
import {useEffect, useRef} from "react";
import LSystem from 'lindenmayer';
import DashboardCard from "@components/components/cards/dashboard-card/dashboard-card";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";
import Tree from "@components/components/tree/tree";



export default function Dashboard() {

    const profileImage = `/assets/PNG/profile_image_1.jpeg`

    const handleLogout = () => {
        sessionStorage.setItem('loggedIn', 'false');
        sessionStorage.setItem('isAdmin', 'false');
        window.location.href = '/';
    }

    const environmentalImpact = {
        causes: [
            {
                id: 1,
                boldText: '44 KG',
                text: 'Of CO2 Reduction',
                icon: 'carbon',
                infoText: 'Carbon emissions info',
                largeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at aliquet nisi, sed aliquet ipsum. Sed at aliquet nisi, sed aliquet ipsum. Sed at aliquet nisi, sed aliquet ipsum',
                link: 'uhisdkd',
            },
            {
                id: 2,
                boldText: '20 Liters',
                text: 'Of water saved',
                icon: 'water',
                infoText: 'Water savings info',
                link: 'uhisdkd',
            },
            {
                id: 3,
                boldText: '200 M2',
                text: 'Of land use saved',
                icon: 'landfill',
                infoText: 'Land use info',
                link: 'uhisdkd',
            },
        ],
        type: 'environmental',
    };

    const socialImpact = {
        causes: [
            {
                id: 1,
                boldText: '20',
                text: 'Hours volunteered',
                icon: 'clock',
                infoText: 'Social impact info',
                link: 'uhisdkd',
            },
            {
                id: 2,
                boldText: '500',
                text: 'ILS Donated',
                icon: 'donate-blue',
            },
            {
                id: 3,
                boldText: '15',
                text: 'Items donated',
                icon: 'goods-donation',
            },
        ],
        type: 'social-black',
    };

    return (
        <div className="bg-light-gray flex flex-col items-center space-y-10 px-32 py-10">
            <img src={profileImage} alt="Profile image" className="rounded-full
            w-52 h-52 outline outline-offset-8 outline-blue outline-2 object-cover"/>
            <div className="flex space-x-10 items-center justify-between">
                <Tree/>
                <DashboardCard className="space-y-10">
                    <h1 className="text-2xl font-bold">Impact</h1>
                    <h1 className="text-lg font-bold">Environmental total points: <span className="text-blue">450</span></h1>
                    <ImpactGraphic impact={environmentalImpact}/>
                    <h1 className="text-lg font-bold">Social total points: <span className="text-blue">2040</span></h1>
                    <ImpactGraphic impact={socialImpact}/>
                </DashboardCard>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-10">
                <DashboardCard>
                    <h1 className="font-bold">Coins</h1>
                </DashboardCard>
                <DashboardCard>
                    <h1 className="font-bold">Badges</h1>
                </DashboardCard>
                <DashboardCard>
                    <h1 className="font-bold">Certifications</h1>
                </DashboardCard>
                <DashboardCard>
                    <h1 className="font-bold">Activities</h1>
                </DashboardCard>
                <DashboardCard className="col-span-2 w-full">
                    <h1 className="font-bold">Analytics</h1>
                </DashboardCard>
                <DashboardCard>
                    <h1 className="font-bold">Gave</h1>
                </DashboardCard>
                <DashboardCard>
                    <h1 className="font-bold">Took</h1>
                </DashboardCard>
                <DashboardCard>
                    <h1 className="font-bold">Made</h1>
                </DashboardCard>


                {/*<BlueButton onClick={handleLogout} className="h-max">Logout</BlueButton>*/}

            </div>
        </div>
    );
};