import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import BlueButton from "@components/components/common/blue-button";
import {useState} from "react";
import Dropdown from "@components/components/common/custom-dropdown/custom-dropdown";
import Icon from "@components/components/common/icon/icon";

const currencyOptions =
    {
        options:
            [
                {
                    id: '0',
                    value: 'nis',
                    text: 'NIS',
                },
                {
                    id: '1',
                    value: 'usd',
                    text: 'USD',
                },
                {
                    id: '2',
                    value: 'euro',
                    text: 'EUR',
                },
            ]
    };



const presets = [10, 20, 50, 100];

export default function DonationPopUp({display, setDisplay}) {
    const [amountToDonate, setAmountToDonate] = useState(0);

    const [anonOrPublic, setAnonOrPublic] = useState('');

    const handlePresetClick = (e) => {
        setAmountToDonate(e.target.id)
    }

    const handleAnonOrPublicChoice = (e) => {
        setAnonOrPublic(e.target.value)
    }

    const donationOptions =
        {
            value: anonOrPublic,
            handleFunction: handleAnonOrPublicChoice,
            placeholder: 'Anonymous or Public?',
            options:
                [
                    {
                        id: '0',
                        value: 'public',
                        name: 'Public Donation',
                    },
                    {
                        id: '1',
                        value: 'name',
                        name: 'Name Only',
                    },
                    {
                        id: '2',
                        value: 'donation',
                        name: 'Donation Only',
                    },
                ],
        };

    return (
        <PopUp display={display} setDisplay={setDisplay} icon="donation">
            <div className="p-8 flex flex-col items-center space-y-4">
                <h2 className="text-[1.26rem] font-bold text-center">How much would you like to donate?</h2>


                <div className="relative w-full">
                    <input type="number" className="w-full h-10 bg-light-gray p-2"
                           value={amountToDonate} onChange={(e) => setAmountToDonate(e.target.value)}>
                    </input>
                    <div
                        className="flex space-x-2 items-center absolute right-0 top-1/2 -translate-y-1/2 h-2/3 bg-white p-2 mr-2">
                        <h3>ILS</h3>
                        <Icon name="down-arrow" className="h-3.5 w-3.5"/>
                    </div>
                </div>

                <div className="flex justify-between w-full">
                    {presets.map(preset => <button id={preset.toString()} key={preset} onClick={handlePresetClick}
                                                   className="bg-white border w-16 h-10 rounded-md text-blue">{preset} ₪</button>)}
                </div>

                <p className="text-gray">What would you like to appear on your personal/company profile?</p>

                <Dropdown selectOptions={donationOptions} className="w-full h-24"/>

                <BlueButton onClick={() => setDisplay(false)}>Continue to secure payment</BlueButton>
            </div>
        </PopUp>
    )
}