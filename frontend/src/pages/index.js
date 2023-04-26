import React from "react";
import PrimaryButton from "@components/components/common/primaryButton";

export default function Home() {
    return (
        <div className="flex flex-col h-screen items-center">
            <div className="flex w-full h-1/2 px-72">
                <div className="flex flex-col space-y-5">
                    <h1 className="text-4xl">Turn Social Impact Into Business Impact</h1>
                    <p>Build a more connected culture. A stronger community. A brand people trust. With corporate
                        purpose software that does it all, easily and efficiently.</p>
                    <PrimaryButton className="text-2xl w-fit px-4 py-3">See a Demo</PrimaryButton>
                </div>
                <img src="/assets/PNG/happy_employees.jpeg" className="h-52 shadow-lg"/>
            </div>
            <div className="flex flex-col items-center">
                <h1 className='text-2xl mb-14'>Join 900+ Brands Who Use Partake</h1>
                <div className="flex space-x-14 animate-scroll">
                    <img src="https://benevity.com/hubfs/Client%20Logos/Starbucks.png" className="h-20"/>
                    <img src="https://benevity.com/hubfs/new-ups-logo-png-ups-logo-logotype-3410.png" className="h-20"/>
                    <img src="https://benevity.com/hubfs/GEA_Logo_MediumBlue_SteelBlue_Vertical%5B78%5D.jpg" className="h-20"/>
                    <img src="https://benevity.com/hubfs/Client%20Logos/ADP_logo.png" className="h-20"/>
                    <img src='https://benevity.com/hubfs/Client%20Logos/ameriprise.png' className="h-20"/>
                    <img src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/levis.svg' className="h-20"/>
                    <img src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/merck.svg' className="h-20"/>
                </div>

                <div className="-translate-y-32 flex space-x-14 animate-scroll2">
                    <img src="https://benevity.com/hubfs/Client%20Logos/Starbucks.png" className="h-20"/>
                    <img src="https://benevity.com/hubfs/new-ups-logo-png-ups-logo-logotype-3410.png" className="h-20"/>
                    <img src="https://benevity.com/hubfs/GEA_Logo_MediumBlue_SteelBlue_Vertical%5B78%5D.jpg" className="h-20"/>
                    <img src="https://benevity.com/hubfs/Client%20Logos/ADP_logo.png" className="h-20"/>
                    <img src='https://benevity.com/hubfs/Client%20Logos/ameriprise.png' className="h-20"/>
                    <img src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/levis.svg' className="h-20"/>
                    <img src='https://benevity.com/hubfs/Previous%20website%20assets/benevity_alaya_2022/goodness-matters/merck.svg' className="h-20"/>
                </div>
            </div>
        </div>
    )
}
