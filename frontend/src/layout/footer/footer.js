// components/Footer.js
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



const Footer = () => {
    return (
        <div className="flex flex-col bg-footer-gray px-10 pt-10 pb-3 h-80 mt-32 justify-between text-white">
            <div className="flex space-x-32">
                <div className="flex flex-col justify-around">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <div className="flex">
                        <EmailIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                    </div>
                    <h2 className="text-lg font-semibold">Partake</h2>
                </div>
                <div  className="flex flex-col justify-around">
                    <h2 className="text-lg font-semibold">Resources</h2>
                    <ul className="list-none p-0">
                        <li>
                            <a href="#">World calculator</a>
                        </li>
                        <li>
                            <a href="#">How to make an impact?</a>
                        </li>
                        <li>
                            <a href="#">What is ESG?</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Partners</h2>
                    <ul className="list-none p-0">
                        <li>
                            <a href="#">Our partners</a>
                        </li>
                        <li>
                            <a href="#">Join</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
                <a href="#">
                    Cookie Policy
                </a>
                <a href="#">
                    Privacy Policy
                </a>
            </div>
        </div>
    );
};

export default Footer;
