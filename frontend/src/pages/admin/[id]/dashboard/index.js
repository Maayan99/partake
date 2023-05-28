import AdminNav from "@components/layout/admin-nav/admin-nav";
import UsersGrid from "@components/components/users-grid/users-grid";
import DashboardCard from "@components/components/cards/dashboard-card/dashboard-card";
import PrimaryButton from "@components/components/common/primary-button";
import Icon from "@components/components/common/icon/icon";
import Head from "next/head";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";









const environmentalImpact = {
    categories: [
        {
            id: '1',
            boldText: '44 KG',
            text: 'Of CO2 Reduction',
            icon: 'carbon',
            tooltipText: 'Carbon emissions info',
            tooltips:
                [
                    {
                        text: 'Each meal donated helps another child smile more',
                        icon: 'community',
                    },
                ],
        },
        {
            id: '2',
            boldText: '20 Liters',
            text: 'Of water saved',
            icon: 'water',
            tooltipText: 'Carbon emissions info',
            tooltips:
                [
                    {
                        text: 'Each meal donated helps another child smile more',
                        icon: 'community',
                    },
                ],
        },
        {
            id: '3',
            boldText: '200 M2',
            text: 'Of land use saved',
            icon: 'landfill',
            tooltipText: 'Carbon emissions info',
            tooltips:
                [
                    {
                        text: 'Each meal donated helps another child smile more',
                        icon: 'community',
                    },
                ],
        },
    ],
    type: 'environmental',
};

const socialImpact = {
    categories: [
        {
            id: 1,
            boldText: '20',
            text: 'Hours volunteered',
            icon: 'clock',
            tooltipText: 'Carbon emissions info',
            tooltips:
                [
                    {
                        text: 'Each meal donated helps another child smile more',
                        icon: 'relax',
                    },
                ],
        },
        {
            id: 2,
            boldText: '500',
            text: 'ILS Donated',
            icon: 'donation',
        },
        {
            id: 3,
            boldText: '15',
            text: 'Items donated',
            icon: 'goods-donation',
        },
    ],
    type: 'social',
}










export default function AdminDashboard() {
    const baseUrl = '/admin/oiuadsfhli1u32e';


    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <div className="flex bg-light-gray">
                <AdminNav baseUrl={baseUrl}/>
                <div className="p-16 space-y-8">
                    <div className="grid grid-cols-6 gap-6">
                        <h1 className="font-bold col-span-6 text-5xl">Welcome, Evyatar</h1>

                        <h1 className="font-bold col-span-6">Analytics</h1>
                        <DashboardCard className="col-span-4 space-y-2">
                            <h1>Activity Log</h1>
                            <Icon name="big-graph"/>
                        </DashboardCard>
                        <DashboardCard className="col-span-2 space-y-2 flex flex-col justify-center">
                            <h1>ESG Goals</h1>
                            <Icon name="small-graph"/>
                        </DashboardCard>

                        <DashboardCard className="relative col-span-2">
                            <div className="flex items-center space-x-4">
                                <Icon name="donation" className="h-6"/>
                                <h1>Money Donated</h1>
                            </div>
                            <h2>310,500$</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2">
                            <div className="flex items-center space-x-4">
                                <Icon name="goods-donation" className="h-6"/>
                                <h1>Goods Donated</h1>
                            </div>
                            <h2>310,500$</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2">
                            <div className="flex items-center space-x-4">
                                <Icon name="clock" className="h-6"/>
                                <h1>Hours Volunteered</h1>
                            </div>
                            <h2>310,500$</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>




                        <h1 className="font-bold col-span-6">Users</h1>
                        <DashboardCard className="flex items-center justify-center border-blue col-span-6">
                            <UsersGrid numberOfRows={5} paginate={false}/>
                            <a href={`${baseUrl}/users`}>
                                <p className="absolute bottom-10 right-8 font-bold text-blue">Go to users page</p>
                            </a>
                        </DashboardCard>





                        <h1 className="font-bold col-span-3">Give</h1>
                        <h1 className="font-bold col-span-3">Take</h1>
                        <DashboardCard className="col-span-3">
                            <PrimaryButton className="flex gap-2 items-center">
                                <Icon name="white-plus" className="h-8"/>
                                Add a new give activity
                            </PrimaryButton>
                            <p className="font-bold">See suggestions</p>
                            <a href={`${baseUrl}/activities`}>
                                <p className="absolute bottom-10 right-8 font-bold">Go to Give page</p>
                            </a>
                        </DashboardCard>
                        <DashboardCard className="col-span-3">

                        </DashboardCard>



                        <h1 className="font-bold col-span-6">Partner Network</h1>
                        <DashboardCard className="col-span-6">

                        </DashboardCard>







                        <h1 className="font-bold col-span-3">Impact Report</h1>
                        <h1 className="font-bold col-span-3">Wallet</h1>
                        <DashboardCard className="col-span-3">
                            <h1 className="text-2xl font-bold">Impact</h1>
                            <h1 className="text-lg font-bold">Environmental total points: <span
                                className="text-blue">450</span></h1>
                            <ImpactGraphic impact={environmentalImpact} showIconsBelow={true}/>
                            <h1 className="text-lg font-bold">Social total points: <span className="text-blue">2040</span>
                            </h1>
                            <ImpactGraphic impact={socialImpact} showIconsBelow={true}/>
                        </DashboardCard>
                        <DashboardCard className="col-span-3">

                        </DashboardCard>

                        <h1 className="font-bold col-span-6">Company's Programs</h1>
                        <DashboardCard className="col-span-2">

                        </DashboardCard>
                        <DashboardCard className="col-span-2">

                        </DashboardCard>
                        <DashboardCard className="col-span-2">

                        </DashboardCard>
                    </div>
                </div>
            </div>
        </>
    );
}