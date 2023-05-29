import {Avatar, Grid} from "@mui/material";
import React from "react";
import users from "../../../public/users";

export default function ParticipantsRow({participants}) {
    const numberOfParticipants = participants.number;
    const arrayOfParticipants = participants.array;

    return (
        <div className="w-32 grid grid-cols-7">

            {arrayOfParticipants.map(participant =>
                <img src={`/assets/PNG/profile-images/${users[participant].profileImage}`} alt="Profile"
                                                         className="border border-white rounded-full
            min-w-[32px] h-8 object-cover hover:z-10"/>)}
            <div
                className="cursor-default flex justify-center items-center bg-blue min-w-[32px] h-8 rounded-full border-white border">
                <p className="text-white text-xs">{numberOfParticipants - 5}+</p>
            </div>
        </div>
    )
}