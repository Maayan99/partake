import React from 'react';
import styles from './header.module.css';
import {AppBar, Toolbar, Typography, Avatar, Box} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import StarIcon from '@mui/icons-material/Star';

const Header = () => {
    const profilePhotoURL = 'https://unsplash.it/200'; // Replace with the user's profile photo URL later

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    partake
                </Typography>
                <Box sx={{flexGrow: 1}}/>

                <div className={styles.myImpactContainer}>
                    <Typography variant="subtitle1" component="span">
                        My impact
                    </Typography>
                    <div className={styles.impactContainer}>
                        <PublicIcon color="primary"/>
                        <Typography variant="subtitle1" component="span">
                            1000
                        </Typography>
                    </div>
                    <div className={styles.impactContainer}>
                        <PeopleIcon color="primary"/>
                        <Typography variant="subtitle1" component="span">
                            2000
                        </Typography>
                    </div>
                    <div className={styles.impactContainer}>
                        <MonitorHeartIcon color="primary"/>
                        <Typography variant="subtitle1" component="span">
                            491
                        </Typography>
                    </div>
                </div>

                <div className={styles.coinsContainer}>
                    <Typography variant="subtitle1" component="span">
                        Partake Coins
                    </Typography>
                    <StarIcon color="primary"/>
                    <Typography variant="subtitle1" component="span">
                        100
                    </Typography>
                </div>
                <Avatar src={profilePhotoURL} alt="Profile"
                        style={{
                            border: '1px solid white',
                            outline: '2px solid #007FFF'
                        }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
