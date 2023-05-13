import TransparentButton from "@components/components/common/transparent-button";
import React from "react";

export default function ParticipantsGrid ( {handleInviteFriends, participants}) {
    return (
        <div>
            <h1 className="font-bold">Participants ({participants})</h1>
            <TransparentButton className="text-sm mb-6 font-semibold" onClick={handleInviteFriends}>Invite
                Friends</TransparentButton>
            <div className="grid grid-cols-6 gap-2 w-max">
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-1.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-2.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-23.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-4.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-5.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-22.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-21.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-8.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-9.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-10.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-11.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-12.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-13.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-14.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-19.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-17.png"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/avatar-18.png"
                     alt="Profile"/>
            </div>
            <TransparentButton className="text-sm mt-2">See more</TransparentButton>
        </div>
    )
}