import SmallChallengeCard from "@components/components/cards/smallChallengeCard/smallChallengeCard";
import challenges from "../../../public/challenges.js"
import Head from "next/head";
import styles from "./take.module.css";
import {MenuItem, Select, TextField, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LargeChallengeCard from "@components/components/cards/largeChallengeCard/largeChallengeCard";
import PrimaryButton from "@components/components/common/primaryButton";
import {useState} from "react";


const FilterBar = ( {type, setType} ) => {
    const handleTypeChange = (option) => {
        setType(option)
    };

    return (
        <div className={styles["filter-bar"]}>
            <TextField label="Search" variant="outlined" sx={{borderRadius: 0}} size="small"/>
            <Select
                value={type}
                label="Type"
                onChange={handleTypeChange}
                className={styles["select-filter"]}
            >
                <MenuItem value="Environment">Environment</MenuItem>
                <MenuItem value="Social">Social</MenuItem>
                <MenuItem value="Wellness">Well-Being</MenuItem>
            </Select>
        </div>
    );
}

const BeforeSearch = () => {
    const forYou = challenges.filter(challenge => challenge.category === 'For you');
    const popular = challenges.filter(challenge => challenge.category === 'Popular');
    const learningAndSurveys = challenges.filter(challenge => challenge.category === 'Learning and Surveys');
    const featuredChallenge = challenges[0];


    return (
        <div>
            <div>
                <div className={styles["category-title"]}>
                    <Typography variant="h5" fontWeight="bold">Featured</Typography>
                </div>
                <div className={styles["featured-row"]}>
                    <LargeChallengeCard challenge={featuredChallenge}/>
                    <div className={styles["featured-two-challenges"]}>
                        <SmallChallengeCard challenge={challenges[1]}/>
                        <SmallChallengeCard challenge={challenges[2]}/>
                    </div>
                    <div className={styles["featured-text-container"]}>
                        <Typography variant="h5">Try the {featuredChallenge.title} challenge</Typography>
                        <Typography variant="h5">{featuredChallenge.shortDescription}</Typography>
                        <PrimaryButton>Take Challenge</PrimaryButton>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles["category-title"]}>
                    <Typography variant="h5" fontWeight="bold">For You</Typography>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["challenges-container"]}>
                    {forYou.map(challenge => <SmallChallengeCard key={challenge.id} challenge={challenge}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <Typography variant="h5" fontWeight="bold">Popular</Typography>
                    <ArrowForwardIosIcon/>
                </div>
                <div className={styles["challenges-container"]}>
                    {popular.map(challenge => <SmallChallengeCard key={challenge.id} challenge={challenge}/>)}
                </div>
            </div>

            <div>
                <div className={styles["category-title"]}>
                    <Typography variant="h5" fontWeight="bold">Leaning and Surveys</Typography>
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

const AfterSearch = () => {
    return (
        <div>

        </div>
    )
};

export default function Take() {
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [duration, setDuration] = useState("");

    return (
        <>
            <Head>
                <title>Take - Partake</title>
            </Head>
            <div className={styles["take"]}>
            <FilterBar type={type} setType={setType}/>
            {(type !== "" || subject !== "" || duration !== "") ?
            <AfterSearch/> :
            <BeforeSearch/>}
            </div>
        </>
    );
}