import takeData from "../../../public/take-data.js"
import {useRouter} from "next/router";
import Image from "next/image"
import ChallengeCoverCard from "@components/components/cards/challengeCoverCard/challengeCoverCard";
import PrimaryButton from "@components/components/common/primaryButton";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function TakePage() {
    const router = useRouter();
    const {id} = router.query;

    // Check if the router has the required data
    if (!id) {
        return null; // TODO: render a loading indicator
    }

    const take = takeData.find(take => {
        return take.id === id;
    });

    if (!take) {
        return null;
    }

    const {reward, tips, impact, task, description, type, numberOfTasks, location, difficultyLevel, participants, duration} = take;

    const getImpactGraphic = () => {
        return (
            <div>

            </div>
        );
    }

    const getDurationText = () => {
        if (duration < 60) {
            return `${duration} Minutes`;
        } else if (duration < 1440) {
            if (duration === 60) {
                return "One Hour";
            }
            return `${duration / 60} Hours`;
        } else if (duration < 10080) {
            if (duration === 1440) {
                return "One Day";
            }
            return `${duration / 1440} Days`;
        } else {
            if (duration === 10080) {
                return "One Week";
            }
            return `${duration / 10080} Weeks`;
        }
    }

    return (
        <>
            <div className="grid lg:grid-cols-page-grid md:grid-cols-2 sm:grid-cols-1 gap-20 px-20">
                {/*TODO: Check why the col-span-2 doesn't work*/}
                <ChallengeCoverCard className="md:col-span-2 lg:col-span-1" take={take}/>

                {/*Important details container*/}
                <div className="md:col-span-2 space-y-10 h-[760px] lg:h-[420px]">
                    <div className="flex space-x-2 h-10">
                        <PrimaryButton>Take Challenge</PrimaryButton>
                        <PrimaryButton>Invite Friends</PrimaryButton>
                    </div>
                    <div className="w-full h-[680px] md:h-[340px] bg-important-blue grid md:grid-cols-2">
                        <div className="ml-10 my-7 space-y-2">
                            <h1 className="font-bold">Duration</h1>
                            <p>{getDurationText()}</p>
                        </div>
                        <div className="ml-10 lg:ml-0 my-7 space-y-2">
                            <h1 className="font-bold">Type</h1>
                            <p>{type}</p>
                        </div>
                        <div className="ml-10 my-7 space-y-2">
                            <h1 className="font-bold">Number of Tasks</h1>
                            <p>{numberOfTasks}</p>
                        </div>
                        <div className="ml-10 lg:ml-0 my-7 space-y-2">
                            <h1 className="font-bold">Location</h1>
                            <p>{location}</p>
                        </div>
                        <div className="ml-10 my-7 space-y-2">
                            <h1 className="font-bold">Difficulty Level</h1>
                            <p>{difficultyLevel}</p>
                        </div>
                        <div className="ml-10 lg:ml-0 my-7 space-y-2">
                            <h1 className="font-bold">Participants</h1>
                            <p>{participants}</p>
                        </div>
                    </div>
                </div>

                {/*Detailed details*/}
                <div className="space-y-5">
                    <h1 className="font-bold">Description</h1>
                    <p>{description}</p>
                </div>
                {task ? <div className="space-y-5">
                    <h1 className="font-bold">Task</h1>
                    <p>{task}</p>
                </div> : <></>}
                {impact ? <div className="space-y-5">
                    <h1 className="font-bold">Impact</h1>
                    <p>{getImpactGraphic()}</p>
                </div> : <></>}
                {tips ? <div className="space-y-5">
                    <h1 className="font-bold">Tips</h1>
                    {/*TODO: currently bullet list has to use pl-4 in order not to have the bullets out of the grid area. Find a cleaner fix*/}
                    <ul className="list-disc pl-4">{tips.map(tip => <li key={tip.id}>{tip}</li>)}</ul>
                </div> : <></>}
                {participants ? <div className="space-y-5">
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
                </div> : <></>}
                {reward ? <div className="space-y-5">
                    <h1 className="font-bold">Reward</h1>
                    <ul className="space-y-2">{reward.map(reward =>
                        <div className="flex space-x-2">
                            <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 min-w-[80px] h-20 text-blue">
                                <StarIcon/>
                                <p className="text-xs">{reward[0]}</p>
                            </div>
                            <p className="text-sm text-gray">{reward[1]}</p>
                        </div>
                    )
                    }</ul>
                </div> : <></>}
            </div>
        </>

    )
}