import SmallChallengeCard from "@components/components/cards/smallChallengeCard/smallChallengeCard";

export default function Take() {
    const challenge = {
        coverImage: 'https://unsplash.it/200',
        title: 'Small Challenge',
        author: 'John Doe',
        impactType: 'People',
        coins: 5,
        progress: 60,
    };

    return (
        <div className="App">
            <SmallChallengeCard challenge={challenge} />
        </div>
    );
}