// components/Footer.js
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



const Footer = () => {
    return (
        <div className="flex flex-col bg-footer-gray px-10 pt-10 pb-3 h-80 mt-32 justify-between text-white">
            <div className="flex space-x-32 h-full">
                <div className="flex flex-col space-y-10">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <div className="flex space-x-2">
                        <EmailIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                    </div>
                    <h2 className="text-lg font-semibold">Partake</h2>
                </div>
                <div  className="space-y-4">
                    <h2 className="text-xl font-semibold">Resources</h2>
                    <ul className="list-none p-0 space-y-3">
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
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Partners</h2>
                    <ul className="list-none p-0 space-y-3">
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
