import SmallGiveCard from "@components/components/cards/small-give-card/small-give-card";
import Head from "next/head";
import giveData from "../../../public/give-data.js"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import FilterBar from "@components/components/filter-bar/filter-bar";


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

                    <div className="flex pl-36 pt-10 pb-5 -mb-5 space-x-5 overflow-x-auto">
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

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleCauseChange = (event) => {
        setCause(event.target.value);
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
                    value: 'environmental',
                    name: 'Environmental',
                },
                {
                    id: '2',
                    value: 'social',
                    name: 'Social',
                },
                {
                    id: '3',
                    value: 'wellness',
                    name: 'Well-Being',
                },
            ],
        },
        {
            id: '2',
            handleFunction: handleCauseChange,
            placeholder: 'Cause',
            value: cause,
            options: [
                {
                    id: '1',
                    value: 'Sustainability',
                    name: 'Sustainability',
                },
                {
                    id: '2',
                    value: 'Wellness',
                    name: 'Wellness',
                },
                {
                    id: '3',
                    value: 'Social Connection',
                    name: 'Social Connection',
                },
                {
                    id: '4',
                    value: 'Training and Development',
                    name: 'Training and Development',
                },
                {
                    id: '5',
                    value: 'Diversity and Inclusion',
                    name: 'Diversity and Inclusion',
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
                    name: 'Longer than 15 Minutes',
                },
                {
                    id: '2',
                    value: '60',
                    name: 'Longer than 1 Hour',
                },
                {
                    id: '3',
                    value: '1440',
                    name: 'Longer than a Day',
                },
            ],
        },

    ];

    return (
        <>
            <Head>
                <title>Give Activities</title>
            </Head>
            <FilterBar
                search={search} setSearch={setSearch}
                filterersArray={filterers}/>
            {(search !== "" || type !== "" || cause !== "" || duration !== "") ?
                <AfterSearch search={search} type={type} cause={cause} duration={duration}/> :
                <BeforeSearch/>}
        </>
    );
}