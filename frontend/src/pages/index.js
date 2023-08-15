import React from "react";
import PrimaryButton from "@components/components/common/primary-button";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <meta http-equiv="refresh" content="0; URL=/take" />
            </Head>
            <div className="flex flex-col h-screen items-center">
                <div className="flex items-end w-full h-1/3 px-32 mb-20 mt-32 space-x-20">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-5xl">Turn Social Impact Into Business Impact</h1>
                        <p>Build a more connected culture. A stronger community. A brand people trust. With corporate
                            purpose software that does it all, easily and efficiently.</p>
                        <PrimaryButton className="text-2xl w-fit px-4 py-3">See a Demo</PrimaryButton>
                    </div>
                    <img
                        src="https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/alaya-home/new-banner-image.png"
                        className="h-96"/>
                </div>
                <div className="flex flex-col items-center overflow-hidden">
                    <h1 className='text-2xl mb-14'>Join 900+ Brands Who Use Partake</h1>
                    <div className="flex space-x-14 animate-scroll">
                        <img src="https://benevity.com/hubfs/Client%20Logos/Starbucks.png" className="h-20"/>
                        <img src="https://benevity.com/hubfs/new-ups-logo-png-ups-logo-logotype-3410.png"
                             className="h-20"/>
                        <img src="https://benevity.com/hubfs/GEA_Logo_MediumBlue_SteelBlue_Vertical%5B78%5D.jpg"
                             className="h-20"/>
                        <img src="https://benevity.com/hubfs/Client%20Logos/ADP_logo.png" className="h-20"/>
                        <img src='https://benevity.com/hubfs/Client%20Logos/ameriprise.png' className="h-20"/>
                        <img
                            src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/levis.svg'
                            className="h-20"/>
                        <img
                            src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/merck.svg'
                            className="h-20"/>
                    </div>

                    <div className="relative -top-20 flex space-x-14 animate-scroll2">
                        <img src="https://benevity.com/hubfs/Client%20Logos/Starbucks.png" className="h-20"/>
                        <img src="https://benevity.com/hubfs/new-ups-logo-png-ups-logo-logotype-3410.png"
                             className="h-20"/>
                        <img src="https://benevity.com/hubfs/GEA_Logo_MediumBlue_SteelBlue_Vertical%5B78%5D.jpg"
                             className="h-20"/>
                        <img src="https://benevity.com/hubfs/Client%20Logos/ADP_logo.png" className="h-20"/>
                        <img src='https://benevity.com/hubfs/Client%20Logos/ameriprise.png' className="h-20"/>
                        <img
                            src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/levis.svg'
                            className="h-20"/>
                        <img
                            src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/merck.svg'
                            className="h-20"/>
                    </div>
                </div>
            </div>
            <section className="bg-slate-200 h-[120vh] flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <img
                        src="https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/alaya-home/corporate-purpose.png"
                        className="h-full"/>
                    <div className="flex flex-col justify-evenly h-1/2 pr-52">
                        <h1 className="text-blue text-3xl">Partake Solutions</h1>
                        <h1 className="text-5xl font-bold">Your Corporate Purpose in One Platform</h1>
                        <h1>The only all-in-one software solution that benefits everyone. Employees. Customers.
                            Nonprofits. Society. And your business.</h1>
                    </div>
                </div>
                <div className="flex px-32 space-x-32">
                    <div className="space-y-4">
                        <img
                            src="https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/alaya-home/icons_engagement.png"/>
                        <h1>Employee Engagement</h1>
                        <p>Retain top talent. Build a more engaged and inclusive culture through global employee
                            volunteering, giving, micro-actions and affinity groups.</p>
                        <a>Learn more</a>
                    </div>
                    <div className="space-y-4">
                        <img
                            src="https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/alaya-home/icons_investment.png"/>
                        <h1>Community Investment</h1>
                        <p>Make smarter investment decisions. Streamline your grants management. Create maximum
                            community impact everywhere you operate.</p>
                        <a>Learn more</a>
                    </div>
                    <div className="space-y-4">
                        <img
                            src="https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/alaya-home/icons_customer.png"/>
                        <h1>Customer Engagement</h1>
                        <p>Make buying from you feel good. Embed purpose into any customer interaction with our
                            powerful
                            giving API or branded giving portal.
                        </p>
                        <a className='text-blue'>Learn more</a>
                    </div>
                </div>
            </section>


        </>
    )
}
