import SmallChallengeCard from "@components/components/cards/smallChallengeCard/smallChallengeCard";

export default function Take() {
    const challenge = {
        coverImage: 'take_card_vegan_option.png',
        title: 'Vegan Option',
        author: 'John Doe',
        impactType: 'Environment',
        coins: 5,
        progress: 60,
    };

    return (
        <div className="App">
            <SmallChallengeCard challenge={challenge} />
        </div>
    );
}