import challenges from "../../../public/challenges.js"
import {useRouter} from "next/router";
import ChallengeCoverCard from "@components/components/cards/challengeCoverCard/challengeCoverCard";
import {useEffect} from "react";


export default function TakePage() {
    const router = useRouter();
    const {id} = router.query;

    // Check if the router has the required data
    if (!id) {
        return null; // TODO: render a loading indicator
    }

    const challenge = challenges.find(challenge => {
        return challenge.id === id;
    });

    return (
        <div>
            <div>
                <ChallengeCoverCard challenge={challenge}/>
            </div>
        </div>
    )
}