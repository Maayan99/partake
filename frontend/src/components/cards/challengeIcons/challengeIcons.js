import StarIcon from "@mui/icons-material/Star";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";


export default function ChallengeIcons({impactType, coins, duration}) {
    const getDurationText = () => {
        if (duration < 60) {
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration}<br/>Min</p>;
        } else if (duration < 1440) {
            if (duration === 60) {
                return <p className="text-[7pt] -translate-y-[132%]  leading-3 text-center">1<br/>Hour</p>
            }
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration / 60}<br/>Hours</p>;
        } else if (duration < 10080) {
            if (duration === 1440) {
                return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">1<br/>Days</p>;
            }
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration / 1440}<br/>Days</p>;
        } else {
            if (duration === 10080) {
                return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">1<br/>Week</p>;
            }
            return <p className="text-[7pt] -translate-y-[132%] leading-3 text-center">{duration / 10080}<br/>Weeks</p>;
        }
    }


    const getImpactIcon = () => {
        switch (impactType) {
            case 'Wellness':
                return <MonitorHeartIcon/>;
            case 'Social':
                return <PeopleIcon/>;
            case 'Environment':
                return <PublicIcon/>;
            default:
                return null;
        }
    };


    return (
        <div className="mt-2.5 ml-2.5 flex gap-2">
            {impactType ? <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 w-12 h-12 text-blue">{getImpactIcon()}</div> : <></>}
            <div className="flex flex-col justify-center items-center bg-white
            border-solid border-2 border-blue rounded-full p-1 w-12 h-12 text-blue">
                <StarIcon/>
                <span className="text-xs">{coins}</span>
            </div>
            {duration ?
                <div className="text-white w-12 h-12">
                    <svg className="w-12 h-12 fill-white" viewBox="0 0 155 163">
                        <path
                            d="M133.68,37.545c-0.925-0.925-2.429-0.925-3.353,0c-0.931,0.931-0.931,2.434,0,3.359 C143.334,53.918,150.5,71.216,150.5,89.618c0,37.985-30.902,68.882-68.888,68.882c-37.979,0-68.882-30.902-68.882-68.882 c0-37.788,30.592-68.541,68.303-68.858L67.209,34.58c-0.931,0.925-0.931,2.429,0,3.359c0.459,0.465,1.074,0.698,1.677,0.698 s1.211-0.233,1.677-0.698l18.623-18.623L70.562,0.694c-0.931-0.925-2.429-0.925-3.353,0c-0.931,0.931-0.931,2.434,0,3.359 L79.25,16.088C39.743,17.359,7.987,49.801,7.987,89.606c0,40.605,33.027,73.637,73.631,73.637 c40.611,0,73.637-33.033,73.637-73.631C155.256,69.939,147.588,51.454,133.68,37.545z"/>
                    </svg>
                    {getDurationText()}
                </div>
            : <></>}
        </div>
    )
}