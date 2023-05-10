import takeData from "../../../public/take-data.js"
import {useRouter} from "next/router";
import TakeCoverCard from "@components/components/cards/take-cover-card/take-cover-card";
import PrimaryButton from "@components/components/common/primary-button";
import TransparentButton from "@components/components/common/transparent-button"
import BlueButton from "@components/components/common/blue-button"
import React, {useEffect, useMemo, useState} from "react";
import StarIcon from "@mui/icons-material/Star";
import ValidationPopUp from "@components/components/pop-ups/validation-pop-up/validation-pop-up";
import ImpactGraphic from "@components/components/impact-graphic/impact-graphic";
import Gallery from "@components/components/gallery/gallery";
import InvitePopUp from "@components/components/pop-ups/invite-pop-up/invite-pop-up";
import CongratsPopUp from "@components/components/pop-ups/congrats-pop-up/congrats-pop-up";
import ExpandedProgressBar from "@components/components/expanded-progress-bar/expanded-progress-bar";
import Head from "next/head";
import LoadingSpinner from "@components/components/loading-spinner/loading-spinner";
import ParticipantsGrid from "@components/components/participants-grid/participants-grid";

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
                    <PrimaryButton onClick={handleStartChallenge}>Take Challenge</PrimaryButton>
                    <TransparentButton className="px-2 text-xl" onClick={handleInviteFriends}>Invite Friends</TransparentButton>
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
                        <p>{take.tasks.length}</p>
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
        <div className="col-span-3 flex space-x-14 w-full lg:h-[500px]">
            <div className="w-1/2 min-w-[370px]">
                <TakeCoverCard take={take}/>
            </div>
            <div className="flex flex-col justify-between space-y-3">
                <div className="flex space-x-1">
                    <PrimaryButton onClick={handleLeaveChallenge}>Challenge Taken</PrimaryButton>
                    <TransparentButton className="px-2" onClick={handleInviteFriends}>Invite Friends</TransparentButton>
                </div>

                <div className="space-y-5">
                    <h1 className="font-bold text-xl">Task {currentTask + 1}</h1>
                    <div dangerouslySetInnerHTML={{__html: tasks[currentTask]?.longText}}></div>
                </div>
                <ExpandedProgressBar numberOfTasks={tasks.length} numberOfFulfilledTasks={currentTask + 1}
                                     viewedTask={currentTask}/>
                <BlueButton className="mt-4 text-2xl w-2/3" onClick={handleShowValidation}>Validate
                    Task {currentTask + 1}</BlueButton>
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="w-full">
                    <h1 className="font-bold">Your Impact</h1>
                    <ImpactGraphic impact={impact} setPingCategory={setPingCategory}/>
                </div>
                <ParticipantsGrid participants={take.participants} handleInviteFriends={handleInviteFriends}/>

            </div>
        </div>
    )
};

export default function TakePage() {
    const [started, setStarted] = useState(false);
    const [displayValidationPopUp, setDisplayValidationPopUp] = useState(false);
    const [currentTask, setCurrentTask] = useState(0);
    const [displayInvitePopUp, setDisplayInvitePopUp] = useState(false);
    const [displayCongratsPopUp, setDisplayCongratsPopUp] = useState(false);

    const [pingCategory, setPingCategory] = useState(0);

    const [totalImpactScore, setTotalImpactScore] = useState(0);
    const [impactMade, setImpactMade] = useState(
        [
            {
                id: '1',
                boldText: '0 KG',
                icon: 'carbon',
                tooltipText: 'Carbon emissions info',
                tooltips:
                    [
                        {
                            text: '',
                            icon: 'community',
                        },
                    ],
            },
            {
                id: '2',
                boldText: '20 Liters',
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
        ]
    );

    useEffect(() => {
        setImpactMade(prev => {
            return prev.map((category, index) => (index === pingCategory ? {
                ...category,
                ping: true
            } : {...category, ping: false}))
        });
    }, [pingCategory])

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
                        <TopAfterStarted setPingCategory={setPingCategory} take={take} setStarted={setStarted}
                                         handleLeaveChallenge={handleLeaveChallenge}
                                         handleInviteFriends={handleInviteFriends} impact={{categories: impactMade, total: totalImpactScore}}
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
                    </div>
                    {take.whatToDo && <div className="space-y-5">
                        <h1 className="font-bold">What to do?</h1>
                        <p className="text-gray">{take.whatToDo}</p>
                    </div>}
                    {take.impact && <div className="space-y-5">
                        <h1 className="font-bold">Impact</h1>
                        <ImpactGraphic impact={take.impact}/>
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
                                <div className="flex space-x-4">
                                    <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 min-w-[66px] h-16 text-blue">
                                        <StarIcon/>
                                        <p className="text-xs">{reward.amount}</p>
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
                </div>
            </>
        )
    }
}