import SmallTakeCard from "@components/components/cards/small-take-card/small-take-card";
import takeData from "../../../public/take-data.js"
import Head from "next/head";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LargeTakeCard from "@components/components/cards/large-take-card/large-take-card";
import PrimaryButton from "@components/components/common/primary-button";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";


const FilterBar = ({search, setSearch, type, setType, subject, setSubject, duration, setDuration}) => {
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    return (
        <div className="flex ml-36 h-24 items-center space-x-8 mb-10">
            <div className="flex h-10 focus-within:shadow">
                <input placeholder="Search" className="w-72 pl-1 border border-1 border-gray-500 bg-slate-200
                rounded-none border-r-0 focus:outline-none" onChange={handleSearchChange} value={search}/>
                <select onChange={handleTypeChange} placeholder="Type" value={type}
                        className="w-52 border border-1 border-gray-500 bg-slate-200
                rounded-none border-r-0 focus:outline-none after:pr-2">
                    <option value="">Type</option>
                    <option value="Environment">Environment</option>
                    <option value="Social">Social</option>
                    <option value="Wellness">Well-Being</option>
                </select>
                <select onChange={handleSubjectChange} value={subject}
                        className="w-52 border border-1 border-gray-500 bg-slate-200
                rounded-none border-r-0 focus:outline-none">
                    <option value="">Cause</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Social Connection">Social Connection</option>
                    <option value="Training and Development">Training and Development</option>
                    <option value="Diversity and Inclusion">Diversity and Inclusion</option>
                </select>
                <select onChange={handleDurationChange} value={duration}
                        className="w-52 border border-1 border-gray-500 bg-slate-200
                rounded-none focus:outline-none">
                    <option value="">Duration</option>
                    <option value="15">Longer than 15 Minutes</option>
                    <option value="60">Longer than 1 Hour</option>
                    <option value="1440">Longer than a Day</option>
                </select>
            </div>
            <a href="/make">
                <div className="w-24 h-24 border border-4 border-black rounded-full
                transform-all duration-150 hover:scale-110 flex justify-center items-center">
                    <AddIcon className="text-7xl"/>
                </div>
            </a>
        </div>
    );
}

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
                        <a href={`/take/${featuredChallenge.id}`}><PrimaryButton className='py-4 px-8'>Take Challenge</PrimaryButton>
                        </a>
                    </div>
                </div>
            </div>
            {categories.map(category =>
                <div key={category}>
                    <div className="ml-36 mr-14 mt-10 mb-5 flex justify-between">
                        <h1 className="text-3xl font-bold">{categoriesTitleDictionary[category]}</h1>
                        <ArrowForwardIosIcon/>
                    </div>
                    <div className="flex pl-36 pt-5 space-x-5 overflow-y-visible">
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
        filtered = filtered.filter(challenge => {
            return challenge.impactType === type;
        })
    }

    if (subject !== "") {
        filtered = filtered.filter(challenge => {
            return challenge.subject === subject;
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
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 px-4">
            {/*TODO: Make grid responsive*/}
            {filtered.map(take =>
                <div className="m-3">
                    <SmallTakeCard key={take.id} take={take}/>
                </div>)}
        </div>
    )
};

export default function Take() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [duration, setDuration] = useState("");

    return (
        <>
            <Head>
                <title>Take - Partake</title>
            </Head>
            <>
                <FilterBar
                    search={search} setSearch={setSearch}
                    type={type} setType={setType}
                    subject={subject} setSubject={setSubject}
                    duration={duration} setDuration={setDuration}
                />
                {(search !== "" || type !== "" || subject !== "" || duration !== "") ?
                    <AfterSearch search={search} type={type} subject={subject} duration={duration}/> :
                    <BeforeSearch/>}
            </>
        </>
    );
}