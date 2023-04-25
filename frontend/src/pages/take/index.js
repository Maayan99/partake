import SmallChallengeCard from "@components/components/cards/smallChallengeCard/smallChallengeCard";
import takeData from "../../../public/take-data.js"
import Head from "next/head";
import styles from "./take.module.css";
import {Grid, IconButton, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LargeChallengeCard from "@components/components/cards/largeChallengeCard/largeChallengeCard";
import PrimaryButton from "@components/components/common/primaryButton";
import {useState} from "react";


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
        <div className={styles["filter-bar"]}>
            <div className={styles["filter-options"]}>
                <input placeholder="Search" className={styles["search-filter"]} onChange={handleSearchChange}
                       value={search}/>
                <select onChange={handleTypeChange} placeholder="Type" value={type}
                        className={styles["select-filter"]}>
                    <option value="">Type</option>
                    <option value="Environment">Environment</option>
                    <option value="Social">Social</option>
                    <option value="Wellness">Well-Being</option>
                </select>
                <select onChange={handleSubjectChange} value={subject}
                        className={styles["select-filter"]}>
                    <option value="">Subject</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Social Connection">Social Connection</option>
                    <option value="Training and Development">Training and Development</option>
                    <option value="Diversity and Inclusion">Diversity and Inclusion</option>
                </select>
                <select onChange={handleDurationChange} value={duration}
                        className={styles["select-filter"]}>
                    <option value="">Duration</option>
                    <option value="15">Longer than 15 Minutes</option>
                    <option value="60">Longer than 1 Hour</option>
                    <option value="1440">Longer than a Day</option>
                </select>
            </div>
            <IconButton href="/make">
                <ControlPointIcon style={{fontSize: "100px", color: "black"}}/>
            </IconButton>
        </div>
    );
}

const BeforeSearch = () => {
    const forYou = takeData.filter(challenge => challenge.category === 'For you');
    const popular = takeData.filter(challenge => challenge.category === 'Popular');
    const learningAndSurveys = takeData.filter(challenge => challenge.category === 'Learning and Surveys');
    const featuredChallenge = takeData[0];


    return (
        <div>
            <div>
                <div className={styles["category-title"]}>
                    <h1>Featured</h1>
                </div>
                <div className={styles["featured-row"]}>
                    <LargeChallengeCard challenge={featuredChallenge}/>
                    <div className={styles["featured-two-challenges"]}>
                        <SmallChallengeCard challenge={takeData[1]}/>
                        <SmallChallengeCard challenge={takeData[2]}/>
                    </div>
                    <div className={styles["featured-text-container"]}>
                        <Typography variant="h5">Try the {featuredChallenge.title} challenge</Typography>
                        <Typography variant="h5">{featuredChallenge.shortDescription}</Typography>
                        <a href={`/take/${featuredChallenge.id}`}><PrimaryButton style={{fontSize: "30px", maxWidth: "260px", padding: "10px 26px"}}>Take Challenge</PrimaryButton>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles["category-title"]}>
                    <h1>For You</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["challenges-container"]}>
                    {forYou.map(challenge => <SmallChallengeCard key={challenge.id} challenge={challenge}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <h1>Popular</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["challenges-container"]}>
                    {popular.map(challenge => <SmallChallengeCard key={challenge.id} challenge={challenge}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <h1>Learning and Surveys</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["challenges-container"]}>
                    {learningAndSurveys.map(challenge => <SmallChallengeCard key={challenge.id}
                                                                             challenge={challenge}/>)}
                </div>
            </div>
        </div>
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
            <div className={styles["no-results"]}>
                <h1>No results!! Try to filter differently</h1>
            </div>
        )
    }

    return (
        <Grid container className={styles["search-results"]}>
            {/*TODO: Make grid responsive*/}
            {filtered.map(challenge =>
                <Grid item lg={3} className={styles["search-item"]}>
                    <SmallChallengeCard key={challenge.id} challenge={challenge}/>
                </Grid>)}
        </Grid>
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
            <div className={styles["take"]}>
                <FilterBar
                    search={search} setSearch={setSearch}
                    type={type} setType={setType}
                    subject={subject} setSubject={setSubject}
                    duration={duration} setDuration={setDuration}
                />
                {(search !== "" || type !== "" || subject !== "" || duration !== "") ?
                    <AfterSearch search={search} type={type} subject={subject} duration={duration}/> :
                    <BeforeSearch/>}
            </div>
        </>
    );
}