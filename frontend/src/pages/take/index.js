import SmallTakeCard from "@components/components/cards/small-take-card/small-take-card";
import takeData from "../../../public/take-data.js"
import Head from "next/head";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LargeTakeCard from "@components/components/cards/large-take-card/large-take-card";
import PrimaryButton from "@components/components/common/primary-button";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import FilterBar from "@components/components/filter-bar/filter-bar";

const BeforeSearch = () => {
    const forYou = takeData.filter(challenge => challenge.category === 'For you');
    const popular = takeData.filter(challenge => challenge.category === 'Popular');
    const learningAndSurveys = takeData.filter(challenge => challenge.category === 'Learning and Surveys');
    const minutes = takeData.filter(challenge => challenge.category === '15 Minutes or Less');
    const featuredChallenge = takeData[0];

    const categories = ['forYou', 'popular', 'learningAndSurveys', 'minutes'];
    const categoriesTitleDictionary = {
        forYou: 'For You',
        popular: 'Popular',
        learningAndSurveys: 'Learning and Surveys',
        minutes: '15 Minutes or Less',
    };

    const categoriesDictionary = {
        forYou: forYou,
        popular: popular,
        learningAndSurveys: learningAndSurveys,
        minutes: minutes,
    }


    return (
        <>
            <div className="overflow-visible">
                <div className="ml-36 mr-14 mt-10 mb-5">
                    <h1 className="text-3xl font-bold">Featured</h1>
                </div>
                <div className="ml-36 flex space-x-6">
                    <LargeTakeCard take={featuredChallenge}/>
                    <div className="flex flex-col gap-y-5">
                        <SmallTakeCard take={takeData[1]}/>
                        <SmallTakeCard take={takeData[2]}/>
                    </div>
                    <div className="flex flex-col justify-evenly py-10 w-80 text-2xl">
                        <h1>Try the {featuredChallenge.title} challenge</h1>
                        <h1>{featuredChallenge.shortDescription}</h1>
                        <a href={`/take/${featuredChallenge.id}`}><PrimaryButton className='py-4 px-8'>Take
                            Challenge</PrimaryButton>
                        </a>
                    </div>
                </div>
            </div>
            {categories.map(category =>
                <div key={category}>
                    <div className="ml-36 mr-14 mt-10 flex justify-between">
                        <h1 className="text-3xl font-bold">{categoriesTitleDictionary[category]}</h1>
                        <ArrowForwardIosIcon/>
                    </div>
                    {/*pb-24 -mb-24 for overflow reasons*/}
                    <div className="flex pl-36 pt-20 -mt-16 pb-24 -mb-24 space-x-5 overflow-x-auto">
                        {categoriesDictionary[category].map(take => <SmallTakeCard key={take.id} take={take}/>)}
                    </div>
                </div>)}
        </>
    );
}

const AfterSearch = ({search, type, subject, duration}) => {
    let filtered = takeData;

    if (search !== "") {
        filtered = filtered.filter(challenge => {
            let challengeText = `${challenge.description} ${challenge.category} ${challenge.subject} ${challenge.impactType} ${challenge.title} ${challenge.author}`
            return challengeText.toLowerCase().includes(search.toLowerCase());
        })
    }

    if (type !== "") {
        filtered = filtered.filter(take => {
            return take.type === type;
        })
    }

    if (subject !== "") {
        filtered = filtered.filter(take => {
            return take.impact?.type === subject;
        })
    }

    if (duration !== "") {
        filtered = filtered.filter(take => {
            return take.duration <= duration;
        })
    }


    if (filtered.length === 0) {
        return (
            <div className="ml-36">
                <h1 className="text-4xl font-bold">No results!! Try to filter differently</h1>
            </div>
        )
    }

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 px-10 gap-8 items-center">
            {/*TODO: Make grid responsive*/}
            {filtered.map(take =>
                <SmallTakeCard key={take.id} take={take}/>)}
        </div>
    )
};

export default function Take() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [duration, setDuration] = useState("");

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };


    const filterers = [
        {
            id: '1',
            handleFunction: handleTypeChange,
            placeholder: 'Type',
            value: type,
            options: [
                {
                    id: '1',
                    value: 'challenge',
                    name: 'Challenge',
                },
                {
                    id: '2',
                    value: 'survey',
                    name: 'Survey',
                },
                {
                    id: '3',
                    value: 'quiz',
                    name: 'Quiz',
                },
                {
                    id: '4',
                    value: 'learning',
                    name: 'E-Learning',
                },
            ],
        },
        {
            id: '2',
            handleFunction: handleSubjectChange,
            placeholder: 'Subject',
            value: subject,
            options: [
                {
                    id: '1',
                    value: 'environmental',
                    name: 'Environmental',
                },
                {
                    id: '2',
                    value: 'wellness',
                    name: 'Wellness',
                },
                {
                    id: '3',
                    value: 'social',
                    name: 'Social',
                },
            ],
        },
        {
            id: '3',
            handleFunction: handleDurationChange,
            placeholder: 'Duration',
            value: duration,
            options: [
                {
                    id: '1',
                    value: '15',
                    name: 'Shorter than 15 Minutes',
                },
                {
                    id: '2',
                    value: '60',
                    name: 'Shorter than 1 Hour',
                },
                {
                    id: '3',
                    value: '1440',
                    name: 'Shorter than a Day',
                },
            ],
        },
    ];


    return (
        <>
            <Head>
                <title>Take - Partake</title>
            </Head>
            <>
                <FilterBar
                    search={search} setSearch={setSearch}
                    filterersArray={filterers}
                />
                {(search !== "" || type !== "" || subject !== "" || duration !== "") ?
                    <AfterSearch search={search} type={type} subject={subject} duration={duration}/> :
                    <BeforeSearch/>}
            </>
        </>
    );
}