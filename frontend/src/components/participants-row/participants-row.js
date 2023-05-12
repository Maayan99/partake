import {Avatar, Grid} from "@mui/material";
import React from "react";

export default function ParticipantsRow({participants}) {
    return (
        <div className="w-32 grid grid-cols-7">
            <img src="assets/PNG/profile-images/profile_image_2.jpeg" alt="Profile" className="border border-white rounded-full
            min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/profile_image_3.jpeg" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/profile_image_4.jpeg" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/profile_image_5.jpeg" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/profile_image_6.jpeg" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <div className="cursor-default flex justify-center items-center bg-blue min-w-[32px] h-8 rounded-full border-white border">
                <p className="text-white text-xs">{participants - 5}+</p>
            </div>
        </div>
    )
}