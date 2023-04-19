import SmallGiveCard from "@components/components/cards/smallGiveCard/smallGiveCard";

export default function Take() {
    const give = {
        coverImage: 'https://unsplash.it/300',
        title: 'Shekel Hamezion Donations',
        author: 'Shekel',
        activityType: 'Online',
        duration: '3hr'
    };

    return (
        <div className="App">
            <SmallGiveCard give={give} />
        </div>
    );
}