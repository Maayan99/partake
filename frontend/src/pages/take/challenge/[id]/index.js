import takeData from "../../../../../public/take-data.js"
import {useRouter} from "next/router";
import TakeCoverCard from "@components/components/cards/take-cover-card/take-cover-card";
import PrimaryButton from "@components/components/common/primary-button";
import TransparentButton from "@components/components/common/transparent-button"
import BlueButton from "@components/components/common/blue-button"
import React, {useEffect, useMemo, useState} from "react";
import Icon from "@components/components/common/icon/icon";
import ValidationPopUp from "@components/components/pop-ups/validation-pop-up/validation-pop-up";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";
import Gallery from "@components/components/gallery/gallery";
import InvitePopUp from "@components/components/pop-ups/invite-pop-up/invite-pop-up";
import CongratsPopUp from "@components/components/pop-ups/congrats-pop-up/congrats-pop-up";
import ExpandedProgressBar from "@components/components/expanded-progress-bar/expanded-progress-bar";
import Head from "next/head";
import LoadingSpinner from "@components/components/loading-spinner/loading-spinner";
import ParticipantsGrid from "@components/components/participants-grid/participants-grid";
import Leaderboard from "@components/components/leaderboard/leaderboard";

const ImportantDetails = ({started, take, setStarted, setDisplayInvitePopUp}) => {
    const {
        type,
        location,
        tasks,
        difficultyLevel,
        durationText,
        participants,
    } = take;

    const numberOfTasks = tasks.length;

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
                    <PrimaryButton onClick={handleStartChallenge} className="text-lg">Take Challenge</PrimaryButton>
                    <TransparentButton className="px-2 text-lg" onClick={handleInviteFriends}>Invite
                        Friends</TransparentButton>
                </div>}
                <div className="w-full h-[680px] md:h-[340px] bg-important-blue grid md:grid-cols-2 items-center">
                    <div className="ml-10 space-y-2">
                        <div>
                            <Icon name="duration-black" className="float-left w-5 mt-2 mr-3 -ml-1 opacity-70"/>
                            <h1 className="font-bold">Duration</h1>
                        </div>
                        <p>{durationText}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <div>
                            <Icon name="type-black" className="float-left w-5 mt-2.5 mr-3 -ml-1 opacity-70"/>
                            <h1 className="font-bold">Type</h1>
                        </div>
                        <p>{type}</p>
                    </div>
                    <div className="ml-10 space-y-2">
                        <div>
                            <Icon name="tasks-black" className="float-left w-4 mt-1.5 mr-3.5 -ml-0.5 opacity-70"/>
                            <h1 className="font-bold">Number of Tasks</h1>
                        </div>
                        <p>{take.tasks.length}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <div>
                            <Icon name="location-black" className="float-left w-4 mt-1.5 mr-3 -ml-0.5 opacity-70"/>
                            <h1 className="font-bold">Location</h1>
                        </div>
                        <p>{location}</p>
                    </div>
                    <div className="ml-10 space-y-2">
                        <div>
                            <Icon name="level-black" className="float-left w-5 mt-3 mr-2.5 -ml-0.5 opacity-70"/>
                            <h1 className="font-bold">Difficulty Level</h1>
                        </div>
                        <p>{difficultyLevel}</p>
                    </div>
                    <div className="ml-10 lg:ml-0 space-y-2">
                        <div>
                            <Icon name="participants-black" className="float-left w-5 mt-3 mr-2.5 -ml-0.5 opacity-70"/>
                            <h1 className="font-bold">Participants</h1>
                        </div>
                        <p>{participants}</p>
                    </div>
                </div>
            </div>
            {started && <div/>}
        </>
    );
};
const TopAfterStarted = ({
                             setPingCategory,
                             take,
                             currentTask,
                             setDisplayValidationPopUp,
                             handleLeaveChallenge,
                             handleInviteFriends,
                             impact,
                         }) => {
    const {tasks} = take;


    const handleShowValidation = () => {
        setDisplayValidationPopUp(true)
    }

    return (
        <>
            <TakeCoverCard take={take}/>
            <div className="flex flex-col justify-between space-y-3">
                <div className="flex space-x-1 w-full">
                    <PrimaryButton onClick={handleLeaveChallenge} className="text-lg">Challenge Taken</PrimaryButton>
                    <TransparentButton className="px-2 text-lg" onClick={handleInviteFriends}>Invite
                        Friends</TransparentButton>
                </div>

                <div className="space-y-5">
                    <h1 className="font-bold text-xl">Task {currentTask + 1}</h1>
                    <div dangerouslySetInnerHTML={{__html: tasks[currentTask]?.longText}}></div>
                    {tasks[currentTask].videoLink &&
                        <iframe className="aspect-video w-full" src={tasks[currentTask].videoLink}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>

                    }
                </div>
                <ExpandedProgressBar numberOfTasks={tasks.length} numberOfFulfilledTasks={currentTask + 1}
                                     viewedTask={currentTask}/>
                <BlueButton className="mt-4 text-2xl w-64" onClick={handleShowValidation}>Validate
                    Task {currentTask + 1}</BlueButton>
            </div>
            <div className="max-h-[420px] flex flex-col justify-between">
                <h1 className="mb-2">Your impact</h1>
                <ImpactGraphic impact={impact} setPingCategory={setPingCategory}/>
                <h1 className="mt-7 mb-3">Leaderboard</h1>
                {take.isCompetition ? <Leaderboard/>
                    : <ParticipantsGrid participants={take.participants} handleInviteFriends={handleInviteFriends}/>}

            </div>
        </>
    )
};









const impactDictionary = {
    carbon: '0.4KG',
    water: '2L',
    landfill: '100M2',
    happy: 'Relaxation',
    balance: 'Work-Life Balance',
}









export default function TakePage() {
    const [started, setStarted] = useState(false);
    const [displayValidationPopUp, setDisplayValidationPopUp] = useState(false);
    const [currentTask, setCurrentTask] = useState(0);
    const [displayInvitePopUp, setDisplayInvitePopUp] = useState(false);
    const [displayCongratsPopUp, setDisplayCongratsPopUp] = useState(false);


    const router = useRouter();

    const id = useMemo(() => {
        const query = router.query;

        if (query.id) {
            return query.id;
        }
    }, [router.query]);


    const take = useMemo(() => {
        if (id !== '') {
            return takeData.find(take => {
                return take.id === id;
            });
        }
    }, [id]);


    // Check if we fetched the required data
    if (!id || !take) {
        return <LoadingSpinner/>;
    }


    const handleLeaveChallenge = () => {
        setStarted(false);
    };

    const handleInviteFriends = () => {
        setDisplayInvitePopUp(true);
    };

    if (id && id !== '') {
        return (
            <>
                <Head>
                    <title>{take.title}</title>
                </Head>
                <InvitePopUp display={displayInvitePopUp} setDisplay={setDisplayInvitePopUp}/>
                <ValidationPopUp currentTask={currentTask} setCurrentTask={setCurrentTask}
                                 display={displayValidationPopUp} setDisplayCongratsPopUp={setDisplayCongratsPopUp}
                                 numberOfTasks={take.tasks.length}
                                 setDisplay={setDisplayValidationPopUp}
                                 validationData={take.tasks[currentTask].validation}/>
                <CongratsPopUp display={displayCongratsPopUp} setDisplay={setDisplayCongratsPopUp}/>
                <div
                    className={`grid lg:grid-cols-page-grid md:grid-cols-2 sm:grid-cols-1 gap-16 px-20 ${displayValidationPopUp && ''}`}>
                    {started ?
                        <TopAfterStarted take={take} setStarted={setStarted}
                                         handleLeaveChallenge={handleLeaveChallenge}
                                         handleInviteFriends={handleInviteFriends}
                                         impact={{categories: take.impact.categories.map(category => {return {
                                             id: category.id,
                                                 icon: category.icon,
                                                 boldText: impactDictionary[category.icon],
                                             }}), type: take.impact.type}}
                                         setDisplayValidationPopUp={setDisplayValidationPopUp}
                                         currentTask={currentTask}/> :
                        <TakeCoverCard className="md:col-span-2 lg:col-span-1" take={take}/>}


                    {started &&
                        <Gallery items={take.galleryItems} taskNum={currentTask + 1}
                                 task={take.tasks[currentTask]?.shortText}/>}

                    <ImportantDetails take={take} setStarted={setStarted} started={started}
                                      setDisplayInvitePopUp={setDisplayInvitePopUp}/>


                    {/*Detailed details*/}
                    <div className="space-y-5">
                        <h1 className="font-bold">Description</h1>
                        <p className="text-gray">{take.description}</p>
                        {take.videoLink &&
                            <iframe className="aspect-video w-full" src={take.videoLink}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        }
                    </div>
                    {take.whatToDo && <div className="space-y-5">
                        <h1 className="font-bold">Tasks</h1>
                        <p className="text-gray">{take.whatToDo}</p>
                    </div>}
                    {take.impact && <div className="space-y-5">
                        <h1 className="font-bold">Impact</h1>
                        <ImpactGraphic impact={take.impact} showIconsBelow={true}/>
                    </div>}
                    {take.tips &&
                        <div className="space-y-5">
                            <h1 className="font-bold">Tips</h1>
                            {/*TODO: currently bullet list has to use pl-4 in order not to have the bullets out of the grid area. Find a cleaner fix*/}
                            <ul className="list-disc pl-4">{take.tips.map(tip => <li key={tip.id}
                                                                                     className="text-gray">{tip.text}</li>)}</ul>
                        </div>}
                    {take.reward &&
                        <div className="space-y-5">
                            <h1 className="font-bold">Reward</h1>
                            <ul className="space-y-6">{take.reward.map(reward =>
                                <div className="flex space-x-3">
                                    <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 min-w-[66px] h-16 text-blue">
                                        {reward.icon ?
                                            <Icon name={reward.icon} className="w-8 mt-1"/> :
                                            <Icon name="partake-coins" className="w-3 mt-1"/>}
                                        {!reward.icon && <p className="text-sm">{reward.amount}</p>}
                                    </div>
                                    <p className="text-sm text-gray">{reward.text}</p>
                                </div>
                            )
                            }</ul>
                        </div>}
                    {take.participants && <ParticipantsGrid participants={take.participants}
                                                            handleInviteFriends={handleInviteFriends}/>}
                    {take.moreInformation && <div className="space-y-5">
                        <h1 className="font-bold">More Information</h1>
                        <p className="text-gray">{take.moreInformation}</p>
                    </div>}
                    {take.partners &&
                        <div className="space-y-5">
                            <h1 className="font-bold">Partners</h1>
                            <div className="flex">
                                {take.partners.array.map(sponsor =>
                                    <img key={sponsor.id} src={`/assets/PNG/logos/rectangle/logo-${sponsor.image}.png`}
                                         className="h-16" alt={sponsor.name}/>)}
                            </div>
                            <p className="text-gray pt-2">{take.partners.text}</p>
                        </div>}
                </div>
            </>
        )
    }
}