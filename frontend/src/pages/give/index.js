import SmallGiveCard from "@components/components/cards/smallGiveCard/smallGiveCard";
import Head from "next/head";

export default function Give() {
    const give = {
        coverImage: 'shekel_hamezion_donations.png',
        title: 'Shekel Hamezion Donations',
        author: 'Shekel',
        activityType: 'Field',
        duration: '3hr',
        donations: true,
        location: "Jerusalem",
        endDate: "2/5/2023"
    };

    return (
        <>
            <Head>
                <title>Give - Partake</title>
            </Head>
            <div>
                <SmallGiveCard give={give}/>
            </div>
        </>
    );
}