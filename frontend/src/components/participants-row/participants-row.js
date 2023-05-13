import {Avatar, Grid} from "@mui/material";
import React from "react";

export default function ParticipantsRow({participants}) {
    return (
        <div className="w-32 grid grid-cols-7">
            <img src="assets/PNG/profile-images/avatar-5.png" alt="Profile" className="border border-white rounded-full
            min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/avatar-8.png" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/avatar-11.png" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/avatar-19.png" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <img src="assets/PNG/profile-images/avatar-1.png" alt="Profile" className="border border-white rounded-full
             min-w-[32px] h-8 object-cover hover:z-10"/>
            <div className="cursor-default flex justify-center items-center bg-blue min-w-[32px] h-8 rounded-full border-white border">
                <p className="text-white text-xs">{participants - 5}+</p>
            </div>
        </div>
    )
}