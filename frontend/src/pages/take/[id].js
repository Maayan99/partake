import takeData from "../../../public/take-data.js"
import {useRouter} from "next/router";
import TakeCoverCard from "@components/components/cards/take-cover-card/take-cover-card";
import Leaderboard from "@components/components/leaderboard/leaderboard";
import PrimaryButton from "@components/components/common/primaryButton";
import TransparentButton from "@components/components/common/transparentButton"
import BlueButton from "@components/components/common/blueButton"
import React, {useState} from "react";
import StarIcon from "@mui/icons-material/Star";
import ValidationPopUp from "@components/components/pop-ups/validation-pop-up/validation-pop-up";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";
import Gallery from "@components/components/gallery/gallery";
import InvitePopUp from "@components/components/pop-ups/invite-pop-up/invite-pop-up";

const ImportantDetails = ({started, take, setStarted, setDisplayInvitePopUp}) => {
    const {
        type,
        numberOfTasks,
        location,
        difficultyLevel,
        durationText,
        participants,
    } = take;

    const handleStartChallenge = () => {
        setStarted(true);
    };

    const handleInviteFriends = () => {
        setDisplayInvitePopUp(true);
    }

    return (
        <>
            <div className="md:col-span-2 space-y-9 h-[760px] lg:h-[420px]">
                {!started && <div className="flex space-x-1 text-2xl">
                    <PrimaryButton onClick={handleStartChallenge}>Take Challenge</PrimaryButton>
                    <TransparentButton onClick={handleInviteFriends}>Invite Friends</TransparentButton>
                </div>}
                <div className="w-full h-[680px] md:h-[340px] bg-important-blue grid md:grid-cols-2 items-center">
                    <div className="ml-10 space-y-2">
                        <h1 className="font-bold">Duration</h1>
                        <p>{durationText}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <h1 className="font-bold">Type</h1>
                        <p>{type}</p>
                    </div>
                    <div className="ml-10 space-y-2">
                        <h1 className="font-bold">Number of Tasks</h1>
                        <p>{numberOfTasks}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <h1 className="font-bold">Location</h1>
                        <p>{location}</p>
                    </div>
                    <div className="ml-10 space-y-2">
                        <h1 className="font-bold">Difficulty Level</h1>
                        <p>{difficultyLevel}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <h1 className="font-bold">Participants</h1>
                        <p>{participants}</p>
                    </div>
                </div>
            </div>
            {started && <div/>}
        </>
    );
};
const TopAfterStarted = ({take, setStarted, currentTask, setDisplayValidationPopUp, setDisplayInvitePopUp}) => {
    const {title, tasks} = take;


    const handleLeaveChallenge = () => {
        setStarted(false);
    }

    const handleInviteFriends = () => {
        setDisplayInvitePopUp(true);
    }

    return (
        <div className="col-span-3 flex space-x-14 w-full lg:h-[500px]">
            <div className="w-1/2 min-w-[370px]">
                <TakeCoverCard take={take}/>
            </div>
            <div className="flex flex-col space-y-3">
                <div className="flex space-x-1">
                    <PrimaryButton onClick={handleLeaveChallenge}>Challenge Taken</PrimaryButton>
                    <TransparentButton onClick={handleInviteFriends}>Invite Friends</TransparentButton>
                </div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <h1 className="font-bold text-xl">Task {currentTask + 1}</h1>
                <p>{tasks[currentTask].longText}</p>
            </div>
            <div className="min-w-[370px] flex flex-col items-center">
                <Leaderboard take={take}/>
                <BlueButton className="mt-4 text-2xl" onClick={() => setDisplayValidationPopUp(true)}>Validate Task {currentTask + 1}</BlueButton>
            </div>
        </div>
    )
};





export default function TakePage({user}) {
    const [started, setStarted] = useState(false);
    const [displayValidationPopUp, setDisplayValidationPopUp] = useState(false);
    const [currentTask, setCurrentTask] = useState(0);
    const [displayInvitePopUp, setDisplayInvitePopUp] = useState(false);

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

    const take = takeData.find(take => {
        return take.id === id;
    });

    if (!take) {
        return null;
    }


    const {
        galleryItems,
        placeholderText,
        info,
        reward,
        tips,
        impact,
        tasks,
        description,
        participants,
    } = take;


    return (
        <>
            <InvitePopUp display={displayInvitePopUp} setDisplay={setDisplayInvitePopUp}/>
            <ValidationPopUp display={displayValidationPopUp} setDisplay={setDisplayValidationPopUp}/>
            <div
                className={`grid lg:grid-cols-page-grid md:grid-cols-2 sm:grid-cols-1 gap-16 px-20 ${displayValidationPopUp && ''}`}>
                {started ?
                    <TopAfterStarted take={take} setStarted={setStarted} setDisplayInvitePopUp={setDisplayInvitePopUp}
                                     setDisplayValidationPopUp={setDisplayValidationPopUp} currentTask={currentTask}/> :
                    <TakeCoverCard className="md:col-span-2 lg:col-span-1" take={take}/>}


                {started && <Gallery placeholderText={placeholderText} items={galleryItems} taskNum={currentTask + 1}
                                  task={tasks[currentTask].shortText}/>}

                <ImportantDetails take={take} setStarted={setStarted} started={started} setDisplayInvitePopUp={setDisplayInvitePopUp}/>


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