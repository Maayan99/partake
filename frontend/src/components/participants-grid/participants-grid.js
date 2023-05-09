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
                     src="/assets/PNG/profile-images/profile_image_6.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_2.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_3.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_4.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_5.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_6.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_2.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_3.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_4.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_5.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_6.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_2.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_3.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_4.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_5.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_6.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_2.jpeg"
                     alt="Profile"/>
                <img className="rounded-full h-10 w-10 object-cover"
                     src="/assets/PNG/profile-images/profile_image_3.jpeg"
                     alt="Profile"/>
            </div>
            <TransparentButton className="text-sm mt-2">See more</TransparentButton>
        </div>
    )
}