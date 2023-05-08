const LeaderboardRow = ({profileImage, name, score}) => {
    return (
        <div className="p-4">
            <div className="flex space-x-3">
                <img src={`/assets/PNG/profile-images/${profileImage}.jpeg`} className="w-8 h-8 rounded-full object-cover border border-white"
                     alt="Leaderboard Profile Image"/>
                <p className="text-gray-500">{name}</p>
            </div>
            <div className="flex space-x-3 items-center">
                <div className="h-1 bg-blue" style={{width: `${score}%`}}/>
                <p className="text-gray-500">{score}</p>
            </div>
        </div>
    )
}

export default function Leaderboard() {
    const employees = [
        {
            index: "2",
            name: "Gili Jean",
            score: 25,
        },
        {
            index: "3",
            name: "Jela Tean",
            score: 20,
        },
        {
            index: "4",
            name: "Scatman Joe",
            score: 20,
        },
        {
            index: "5",
            name: "Amir Rapopopoport",
            score: 16,
        },
        {
            index: "6",
            name: "Jeremy Beth-Prath",
            score: 6,
        },
    ];

    return (
        <div className="bg-important-blue h-[450px] w-full">
            {employees.map(employee => (<LeaderboardRow key={employee.index}
                                                       profileImage={`profile_image_${employee.index}`}
                                                           name={employee.name} score={employee.score}/>))}
        </div>
    )
}