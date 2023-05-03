import Co2Icon from "@mui/icons-material/Co2";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";

const ImpactCauseIcon = ({impactCause}) => {
    switch (impactCause) {
        case 'CO2':
            return <Co2Icon className="text-6xl"/>;
        case 'Happy':
            return <InsertEmoticonIcon className="text-6xl"/>;
    }
};

const ImpactTypeIcon = ({impactType}) => {
    switch (impactType) {
        case 'Wellness':
            return <MonitorHeartIcon className="text-black text-3xl"/>;
        case 'Social':
            return <PeopleIcon className="text-black text-3xl"/>;
        case 'Environment':
            return <PublicIcon className="text-black text-3xl"/>;
        default:
            return null;
    }
};

export default function ImpactGraphic({impact, info}){
    const impactCauses = impact.causes;
    const impactText = impact.text;
    const impactType = impact.type;

    const infoLink = info.link;
    const infoText = info.text;



    return (
        <div className="flex flex-col justify-between text-sm">
            <div className="flex text-blue h-24 space-x-7">
                <ImpactTypeIcon impactType={impactType}/>
                {impactCauses.map(impactCause => <ImpactCauseIcon key={impactCause} impactCause={impactCause}/>)}
                <p>{impactText}</p>
            </div>
            <div className="flex space-x-6 items-center group">
                <InfoIcon/>
                <a href={infoLink} className="text-blue">{infoText}</a>

            </div>
        </div>
    );
}