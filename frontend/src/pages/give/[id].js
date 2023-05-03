import PrimaryButton from "@components/components/common/primary-button";
import TransparentButton from "@components/components/common/transparent-button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {useRouter} from "next/router";
import giveData from "../../../public/give-data";
import ValidationPopUp from "@components/components/pop-ups/validation-pop-up/validation-pop-up";
import TakeCoverCard from "@components/components/cards/take-cover-card/take-cover-card";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";
import StarIcon from "@mui/icons-material/Star";
import GiveCoverCard from "@components/components/cards/give-cover-card/give-cover-card";
import {useState} from "react";

const ImportantDetails = ({give}) => {
    const {
        parking,
        location,
        difficultyLevel,
        participants,
        timeDetails,
        dateTime,
        contactDetails,
    } = give;

    const frequency = timeDetails.frequency;

    const {email, name, phone} = contactDetails;

    return (
        <>
            <div className="md:col-span-2 space-y-9 h-[760px] lg:h-[420px]">
                <div className="flex space-x-1 text-2xl">
                    <PrimaryButton>Join</PrimaryButton>
                    <TransparentButton>Invite Friends</TransparentButton>
                </div>
                <div className="w-full h-[680px] md:h-[340px] bg-important-blue grid md:grid-cols-2 items-center">
                    <div className="ml-10 space-y-2">
                        <h1 className="font-bold">Location</h1>
                        <div className="flex space-x-2 items-center rounded-full w-fit px-5 py-1 bg-blue">
                            <p className="text-white">{location}</p>
                            <LocationOnIcon className="text-white"/>
                        </div>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <h1 className="font-bold">Parking</h1>
                        <p>{parking}</p>
                    </div>
                    <div className="ml-10 space-y-2">
                        <h1 className="font-bold">Participants</h1>
                        <p>{participants}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <h1 className="font-bold">Frequency</h1>
                        <p>{frequency}</p>
                    </div>
                    <div className="ml-10 space-y-2">
                        <h1 className="font-bold">Date & Time</h1>
                        <p>{dateTime}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <h1 className="font-bold">Contact Person</h1>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default function GivePage() {

    const router = useRouter();
    const {id} = router.query;

    // Check if the router has the required data
    if (!id) {
        return (
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue"/>
            </div>
        );
    }

    const give = giveData.find(give => {
        return give.id === id;
    });

    if (!give) {
        return null;
    }


    const {
        messages,
        placeholderText,
        info,
        reward,
        tips,
        impact,
        tasks,
        description,
        participants,
    } = give;

    return (
        <>
            <div className={`grid lg:grid-cols-page-grid md:grid-cols-2 sm:grid-cols-1 gap-16 px-20`}>
                <GiveCoverCard className="md:col-span-2 lg:col-span-1" give={give}/>


                <ImportantDetails give={give}/>


                {/*Detailed details*/}
                <div className="space-y-5">
                    <h1 className="font-bold">Description</h1>
                    <p>{description}</p>
                </div>
                {tasks && <div className="space-y-5">
                    <h1 className="font-bold">Task</h1>
                    <ul className="list-disc pl-4">{tasks.map(task => <li key={task}>{task.shortText}</li>)}</ul>
                </div>}
                {impact && <div className="space-y-5">
                    <h1 className="font-bold">Impact</h1>
                    <ImpactGraphic impact={impact} info={info}/>
                </div>}
                {tips &&
                    <div className="space-y-5">
                        <h1 className="font-bold">Tips</h1>
                        {/*TODO: currently bullet list has to use pl-4 in order not to have the bullets out of the grid area. Find a cleaner fix*/}
                        <ul className="list-disc pl-4">{tips.map(tip => <li key={tip.id}>{tip}</li>)}</ul>
                    </div>}
                {reward &&
                    <div className="space-y-5">
                        <h1 className="font-bold">Reward</h1>
                        <ul className="space-y-2">{reward.map(reward =>
                            <div className="flex space-x-4">
                                <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 min-w-[80px] h-20 text-blue">
                                    <StarIcon/>
                                    <p className="text-xs">{reward[0]}</p>
                                </div>
                                <p className="text-sm text-gray">{reward[1]}</p>
                            </div>
                        )
                        }</ul>
                    </div>}
                {participants && <div className="space-y-5">
                    <h1 className="font-bold">Participants ({participants})</h1>
                    <div className="grid grid-cols-6 gap-2 w-max">
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/200" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/201" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/202" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/203" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/204" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/205" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/206" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/207" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/208" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/209" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/210" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/211" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/212" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/213" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/214" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/215" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/216" alt="Profile"/>
                        <img className="rounded-full h-10 w-10" src="https://unsplash.it/217" alt="Profile"/>
                    </div>
                </div>}
            </div>
        </>
    )
}