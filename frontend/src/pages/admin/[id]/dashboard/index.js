import AdminNav from "@components/layout/admin-nav/admin-nav";
import UsersGrid from "@components/components/users-grid/users-grid";
import DashboardCard from "@components/components/cards/dashboard-card/dashboard-card";
import PrimaryButton from "@components/components/common/primary-button";
import Icon from "@components/components/common/icon/icon";
import Head from "next/head";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";
import ProgressBar from "@components/components/progress-bar/progress-bar";
import PartnerGrid from "@components/components/partner-grid/partner-grid";


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
                        <div className="col-span-6 flex items-center space-x-4">
                            <h1 className=" text-3xl italic">Welcome, Evyatar</h1>
                            <Icon name="pending" className="h-8"/>
                        </div>
                        <h1 className="font-bold col-span-6 mt-10">Analytics</h1>
                        <DashboardCard className="col-span-4 border-[#00CFFF]">
                            <h1>Activity Log</h1>
                            <Icon name="graph1" className="mt-16 mb-8"/>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See more</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2 border-[#00CFFF]">
                            <h1>ESG Goals</h1>
                            <div className="flex items-center space-x-2">
                                <Icon name="graph2" className="my-4 w-32"/>

                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full h-2 w-2 bg-black"></div>
                                        <p className="text-sm">Sustainability</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full h-2 w-2 bg-black"></div>
                                        <p className="text-sm">Recycling</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full h-2 w-2 bg-black"></div>
                                        <p className="text-sm">Poverty</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full h-2 w-2 bg-black"></div>
                                        <p className="text-sm">Equality</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full h-2 w-2 bg-black"></div>
                                        <p className="text-sm">Youth at risk</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="rounded-full h-2 w-2 bg-black"></div>
                                        <p className="text-sm">Pollution</p>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm w-32">Sustainability</p>
                                    <ProgressBar percentage={80} className="h-[4px]"/>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm w-32">Inclusion</p>
                                    <ProgressBar percentage={70} className="h-[4px]"/>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm w-32">Poverty</p>
                                    <ProgressBar percentage={60} className="h-[4px]"/>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm w-32">Equality</p>
                                    <ProgressBar percentage={50} className="h-[4px]"/>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm w-32">Youth at risk</p>
                                    <ProgressBar percentage={40} className="h-[4px]"/>
                                </div>
                            </div>

                            <p className="absolute bottom-3 right-4 font-bold text-blue">See more</p>
                        </DashboardCard>

                        <DashboardCard className="relative col-span-2 border-[#3BB6FF]">
                            <div className="flex items-center space-x-4">
                                <Icon name="donation" className="h-6"/>
                                <h1>Money Donated</h1>
                            </div>
                            <h2>310,500$</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2 border-[#3BB6FF]">
                            <div className="flex items-center space-x-4">
                                <Icon name="goods-donation" className="h-6"/>
                                <h1>Goods Donated</h1>
                            </div>
                            <h2>310,500$</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2 border-[#3BB6FF]">
                            <div className="flex items-center space-x-4">
                                <Icon name="clock" className="h-6"/>
                                <h1>Hours Volunteered</h1>
                            </div>
                            <h2>310,500$</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>


                        <h1 className="font-bold col-span-6 mt-10">Users</h1>
                        <DashboardCard className="flex items-center justify-center border-blue col-span-6">
                            <UsersGrid numberOfRows={5} paginate={false}/>
                            <a href={`${baseUrl}/users`}>
                                <p className="absolute bottom-5 right-8 font-bold text-blue">Go to users page</p>
                            </a>
                        </DashboardCard>


                        <h1 className="font-bold col-span-3 mt-10">Give</h1>
                        <h1 className="font-bold col-span-3 mt-10">Take</h1>
                        <DashboardCard className="col-span-3 border-[#003ADD] space-y-4 text-blue py-10">
                            <PrimaryButton className="flex gap-2 items-center">
                                <Icon name="white-plus" className="h-8"/>
                                Add a new give activity
                            </PrimaryButton>
                            <p className="font-bold text-lg">See suggestions</p>
                            <a href={`${baseUrl}/activities`}>
                                <p className="absolute bottom-4 right-4 font-bold">Go to Give page</p>
                            </a>
                        </DashboardCard>
                        <DashboardCard className="col-span-3 border-[#003ADD] space-y-4 text-blue py-10">
                            <PrimaryButton className="flex gap-2 items-center">
                                <Icon name="white-plus" className="h-8"/>
                                Add a new take activity
                            </PrimaryButton>
                            <p className="font-bold text-lg">See suggestions</p>
                            <a href={`${baseUrl}/activities`}>
                                <p className="absolute bottom-4 right-4 font-bold">Go to Take page</p>
                            </a>
                        </DashboardCard>


                        <h1 className="font-bold col-span-6 mt-10">Partner Network</h1>
                        <DashboardCard
                            className="flex items-center justify-center border-blue col-span-6  border-[#001DAD]">
                            <PartnerGrid numberOfRows={5} paginate={false}/>
                            <a href={`${baseUrl}/partner-network`}>
                                <p className="absolute bottom-5 right-8 font-bold text-blue">Go to partner network
                                    page</p>
                            </a>
                        </DashboardCard>


                        <h1 className="font-bold col-span-3 mt-10 border-[#001C77]">Impact Report</h1>
                        <h1 className="font-bold col-span-3 mt-10 border-[#001C77]">Wallet</h1>
                        <DashboardCard className="col-span-3 space-y-10">
                            <h1 className="text-2xl font-bold">Impact</h1>
                            <h1 className="text-lg font-bold">Environmental total points: <span
                                className="text-blue">450</span></h1>
                            <ImpactGraphic impact={environmentalImpact} dontShowTotal={true}/>
                            <h1 className="text-lg font-bold">Social total points: <span
                                className="text-blue">2040</span>
                            </h1>
                            <ImpactGraphic impact={socialImpact} dontShowTotal={true}/>
                        </DashboardCard>
                        <DashboardCard className="col-span-3">
                            <div className="flex items-center space-x-3">
                                <h1 className="text-blue text-3xl">280,000</h1>
                                <Icon name="partake-coins-small" className="h-8"/>
                            </div>
                            <h3 className="font-bold mb-3">Partake coins in your wallet</h3>
                            <PrimaryButton className="mb-10">Buy Partake Coins</PrimaryButton>

                            <div className="flex items-center space-x-3">
                                <h1 className="text-blue text-3xl">30,000</h1>
                                <Icon name="partake-coins-small" className="h-8"/>
                            </div>
                            <h3 className="font-bold mb-3">Partake coins used this month</h3>

                            <div className="flex items-center space-x-4">
                                <Icon name="reward" className="h-8"/>
                                <h1 className="font-bold text-3xl">Reward Program</h1>

                            </div>
                            <h2 className="text-blue text-lg font-bold">Manage program</h2>
                            <p className="absolute bottom-3 right-4 font-bold text-blue">Go to wallet</p>
                        </DashboardCard>

                        <h1 className="font-bold col-span-6 mt-10">Company's Programs</h1>
                        <DashboardCard className="col-span-2 border-[#010B2D]">
                            <h1 className="text-xl font-bold">Matching donations</h1>
                            <h2>310,500$</h2>

                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2 border-[#010B2D]">
                            <h1 className="text-xl font-bold">Volunteering grants</h1>
                            <h2>550</h2>

                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                        <DashboardCard className="col-span-2 border-[#010B2D]">
                            <h1 className="text-xl font-bold">Company's initiatives</h1>
                            <h2>1200</h2>

                            <p className="absolute bottom-3 right-4 font-bold text-blue">See details</p>
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </>
    );
}