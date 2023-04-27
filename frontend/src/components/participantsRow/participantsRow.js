import {Avatar, Grid} from "@mui/material";
import React from "react";
import styles from './participantsRow.module.css';

export default function ParticipantsRow() {
    return (
        <Grid container columns={8} className={styles["participants-row"]}>
            <Grid item sm={1}>
                <Avatar src="https://unsplash.it/200" alt="Profile"/>
            </Grid>
            <Grid item sm={1}>
                <Avatar src="https://unsplash.it/201" alt="Profile"/>
            </Grid>
            <Grid item sm={1}>
                <Avatar src="https://unsplash.it/202" alt="Profile"/>
            </Grid>
            <Grid item sm={1}>
                <Avatar src="https://unsplash.it/203" alt="Profile"/>
            </Grid>
            <Grid item sm={1}>
                <Avatar src="https://unsplash.it/204" alt="Profile"/>
            </Grid>
            <Grid item sm={1}>
                <Avatar src="https://unsplash.it/205" alt="Profile"/>
            </Grid>
            {/*<Grid item sm={3}>
                <div className={styles["more-icon"]}>
                    <h1>30+</h1>
                </div>
            </Grid>*/}
        </Grid>
    )
}