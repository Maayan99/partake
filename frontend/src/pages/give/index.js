import SmallGiveCard from "@components/components/cards/smallGiveCard/smallGiveCard";
import Head from "next/head";
import giveData from "../../../public/give-data.js"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";

const FilterBar = ({search, setSearch, type, setType, cause, setCause, duration, setDuration}) => {
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleCauseChange = (event) => {
        setCause(event.target.value);
    };

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    return (
        <div className="flex ml-36 h-24 items-center space-x-8 mb-10">
            <div className="flex h-10">
                <input placeholder="Search" className="w-72 border border-1 border-gray-500
                rounded-none border-r-0" onChange={handleSearchChange} value={search}/>
                <select onChange={handleTypeChange} placeholder="Type" value={type}
                        className="w-52 border border-1 border-gray-500
                rounded-none border-r-0">
                    <option value="">Type</option>
                    <option value="Environment">Environment</option>
                    <option value="Social">Social</option>
                    <option value="Wellness">Well-Being</option>
                </select>
                <select onChange={handleCauseChange} value={cause}
                        className="w-52 border border-1 border-gray-500
                rounded-none border-r-0">
                    <option value="">Cause</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Social Connection">Social Connection</option>
                    <option value="Training and Development">Training and Development</option>
                    <option value="Diversity and Inclusion">Diversity and Inclusion</option>
                </select>
                <select onChange={handleDurationChange} value={duration}
                        className="w-52 border border-1 border-gray-500
                rounded-none">
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
    const forYou = giveData.filter(give => give.category === 'For you');
    const inYourArea = giveData.filter(give => give.category === 'In your area');
    const events = giveData.filter(give => give.category === 'Events');
    const fundraising = giveData.filter(give => give.category === 'Fundraising');


    const categories = ['forYou', 'inYourArea', 'events', 'fundraising'];
    const categoriesTitleDictionary = {
        forYou: 'For You',
        inYourArea: 'In Your Area',
        events: 'Events',
        fundraising: 'Fundraising',
    };

    const categoriesDictionary = {
        forYou: forYou,
        inYourArea: inYourArea,
        events: events,
        fundraising: fundraising,
    }

    return (
        <div>
            {categories.map(category =>
                <div>
                    <div className="ml-36 mr-14 mt-10 flex justify-between">
                        <h1 className="text-3xl font-bold">{categoriesTitleDictionary[category]}</h1>
                        <ArrowForwardIosIcon/>
                    </div>

                    <div className="flex pl-36 pt-5 pb-5 space-x-5 overflow-x-auto overflow-y-visible">
                        {categoriesDictionary[category].map(give => <SmallGiveCard key={give.id} give={give}/>)}
                    </div>
                </div>)}
        </div>
    );
}

const AfterSearch = ({search, type, cause, duration}) => {
    let filtered = giveData;

    if (search !== "") {
        filtered = filtered.filter(challenge => {
            let challengeText = `${challenge.description} ${challenge.category} ${challenge.cause} ${challenge.impactType} ${challenge.title} ${challenge.author}`
            return challengeText.toLowerCase().includes(search.toLowerCase());
        })
    }

    if (type !== "") {
        filtered = filtered.filter(challenge => {
            return challenge.impactType === type;
        })
    }

    if (cause !== "") {
        filtered = filtered.filter(challenge => {
            return challenge.cause === cause;
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
            {filtered.map(give =>
                <div className="m-3">
                    <SmallGiveCard key={give.id} give={give}/>
                </div>)}
        </div>
    )
};

export default function Give() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [cause, setCause] = useState("");
    const [duration, setDuration] = useState("");

    return (
        <>
            <Head>
                <title>Give - Partake</title>
            </Head>
            <>
                <FilterBar
                    search={search} setSearch={setSearch}
                    type={type} setType={setType}
                    cause={cause} setCause={setCause}
                    duration={duration} setDuration={setDuration}
                />
                {(search !== "" || type !== "" || cause !== "" || duration !== "") ?
                    <AfterSearch search={search} type={type} cause={cause} duration={duration}/> :
                    <BeforeSearch/>}
            </>
        </>
    );
}