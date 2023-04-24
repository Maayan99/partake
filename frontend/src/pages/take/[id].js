import challenges from "../../../public/challenges.js"
import {useRouter} from "next/router";
import ChallengeCoverCard from "@components/components/cards/challengeCoverCard/challengeCoverCard";
import styles from './takePage.module.css'
import PrimaryButton from "@components/components/common/primaryButton";
import {Avatar, Grid} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function TakePage() {
    const router = useRouter();
    const {id} = router.query;

    // Check if the router has the required data
    if (!id) {
        return null; // TODO: render a loading indicator
    }

    const challenge = challenges.find(challenge => {
        return challenge.id === id;
    });

    return (
        <div className={styles["take-page"]}>
            <Grid container>
                <Grid item md={5} sm={12}>
                    <ChallengeCoverCard challenge={challenge}/>
                </Grid>
                <Grid item md={7} sm={12}>
                    <div className="row">
                        <PrimaryButton>Take Challenge</PrimaryButton>
                        <PrimaryButton>Invite friends</PrimaryButton>
                    </div>
                    <Grid container className={styles["important-container"]}>
                        <Grid item sm={6} xs={12}>
                            <div className={styles["important-descriptor"]}>
                                <h2>Duration</h2>
                                <p>{challenge.duration}d</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className={styles["important-descriptor"]}>
                                <h2>Type</h2>
                                <p>{challenge.type}</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className={styles["important-descriptor"]}>
                                <h2>Number of Tasks</h2>
                                <p>{challenge.numberOfTasks}</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className={styles["important-descriptor"]}>
                                <h2>Location</h2>
                                <p>{challenge.location}</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className={styles["important-descriptor"]}>
                                <h2>Difficulty Level</h2>
                                <p>{challenge.difficultyLevel}</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className={styles["important-descriptor"]}>
                                <h2>Participants (min-max)</h2>
                                <p>{challenge.participants}</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <Grid container rowSpacing={4} columnSpacing={4}>
                        <Grid item md={5} sm={6} xs={12}>
                            <div className={styles["challenge-fact"]}>
                                <h1>Description</h1>
                                <p>{challenge.description}</p>
                            </div>
                        </Grid>
                        <Grid item md={3.5} sm={6} xs={12}>
                            <div className={`${styles["challenge-fact"]} ${styles["small-challenge-fact"]}`}>
                                <h1>Task</h1>
                                <p>{challenge.task}</p>
                            </div>
                        </Grid>
                        <Grid item md={3.5} sm={6} xs={12}>
                            <div className={`${styles["challenge-fact"]} ${styles["small-challenge-fact"]}`}>
                                <h1>Impact</h1>
                            </div>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12}>
                            <div className={styles["challenge-fact"]}>
                                <h1>Tips</h1>
                                <l>
                                    {challenge.tips.map(tip => <p>{tip}</p>)}
                                </l>
                            </div>
                        </Grid>
                        <Grid item md={3.5} sm={6} xs={12}>
                            <div className={`${styles["challenge-fact"]} ${styles["small-challenge-fact"]}`}>
                                <h1>Participants ({challenge.participants})</h1>
                                <div className={styles["participants-container"]}>
                                    <Avatar src="https://unsplash.it/200" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/201" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/202" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/203" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/204" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/205" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/206" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/207" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/208" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/209" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/210" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/211" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/212" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/213" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/214" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/215" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/216" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/217" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/218" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/219" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/220" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/221" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/222" alt="Profile"/>
                                    <Avatar src="https://unsplash.it/223" alt="Profile"/>


                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}