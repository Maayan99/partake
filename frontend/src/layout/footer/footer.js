// components/Footer.js
import React from 'react';
import {Container, Box, Typography, Grid, Link} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import styles from "./footer.module.css";


const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <Container>
                <Grid container spacing={4} sx={{mb: 2}}>
                    <Grid item xs={12} sm={2} className={styles["column"]}>
                        <Typography variant="h6" color="#ffffff">Contact Us</Typography>
                        <Box sx={{display: "flex"}}>
                            <EmailIcon className={styles["social-icon"]}/>
                            <FacebookIcon className={styles["social-icon"]}/>
                            <TwitterIcon className={styles["social-icon"]}/>
                            <LinkedInIcon className={styles["social-icon"]}/>
                        </Box>
                        <Typography variant="h6" color="#ffffff">Partake</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6" color="#ffffff">Resources</Typography>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li>
                                <Link href="#" color="#ffffff">World calculator</Link>
                            </li>
                            <li>
                                <Link href="#" color="#ffffff">How to make an impact?</Link>
                            </li>
                            <li>
                                <Link href="#" color="#ffffff">What is ESG?</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6" color="#ffffff">Partners</Typography>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li>
                                <Link href="#" color="#ffffff">Our partners</Link>
                            </li>
                            <li>
                                <Link href="#" color="#ffffff">Join</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                    <Link href="#" sx={{mx: 1}} color="#ffffff">
                        Cookie Policy
                    </Link>
                    <Link href="#" sx={{mx: 1}} color="#ffffff">
                        Privacy Policy
                    </Link>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;
