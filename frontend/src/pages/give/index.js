import SmallGiveCard from "@components/components/cards/smallGiveCard/smallGiveCard";
import Head from "next/head";
import giveData from "../../../public/give-data.js"
import styles from "@components/pages/give/give.module.css";
import {Grid, IconButton, Typography} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
                <select onChange={handleCauseChange} value={cause}
                        className={styles["select-filter"]}>
                    <option value="">Cause</option>
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
    const forYou = giveData.filter(give => give.category === 'For you');
    const inYourArea = giveData.filter(give => give.category === 'In your area');
    const events = giveData.filter(give => give.category === 'Events');
    const fundraising = giveData.filter(give => give.category === 'Fundraising');


    return (
        <div>
            <div>
                <div className={styles["category-title"]}>
                    <h1>For You</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["give-container"]}>
                    {forYou.map(give => <SmallGiveCard key={give.id} give={give}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <h1>In Your Area</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["give-container"]}>
                    {inYourArea.map(give => <SmallGiveCard key={give.id} give={give}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <h1>Events</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["give-container"]}>
                    {events.map(give => <SmallGiveCard key={give.id} give={give}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <h1>Fundraising</h1>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["give-container"]}>
                    {fundraising.map(give => <SmallGiveCard key={give.id} give={give}/>)}
                </div>
            </div>
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
            <div className={styles["no-results"]}>
                <h1>No results!! Try to filter differently</h1>
            </div>
        )
    }

    return (
        <Grid container className={styles["search-results"]}>
            {/*TODO: Make grid responsive*/}
            {filtered.map(give =>
                <Grid item lg={3} className={styles["search-item"]}>
                    <SmallGiveCard key={give.id} give={give}/>
                </Grid>)}
        </Grid>
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
            <div className={styles["take"]}>
                <FilterBar
                    search={search} setSearch={setSearch}
                    type={type} setType={setType}
                    cause={cause} setCause={setCause}
                    duration={duration} setDuration={setDuration}
                />
                {(search !== "" || type !== "" || cause !== "" || duration !== "") ?
                    <AfterSearch search={search} type={type} cause={cause} duration={duration}/> :
                    <BeforeSearch/>}
            </div>
        </>
    );
}