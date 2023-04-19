import SmallGiveCard from "@components/components/cards/smallGiveCard/smallGiveCard";

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
        <div className="App">
            <SmallGiveCard give={give}/>
        </div>
    );
}