import SmallGiveCard from "@components/components/cards/smallGiveCard/smallGiveCard";

export default function Give() {
    const give = {
        coverImage: 'https://unsplash.it/300',
        title: 'Shekel Hamezion Donations',
        author: 'Shekel',
        activityType: 'Online',
        duration: '3hr',
        donations: true,
        location: "Jerusalem",
    };

    return (
        <div className="App">
            <SmallGiveCard give={give} />
        </div>
    );
}