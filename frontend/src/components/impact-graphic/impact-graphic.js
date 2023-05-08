import InfoIcon from "@mui/icons-material/Info";
import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCause}) => {

    return (
        <div className="flex flex-col items-center justify-between">
            <Icon name={impactCause.icon} className="w-12 h-12"/>
            {impactCause.boldText && <span className="font-bold text-xl">{impactCause.boldText}</span>}
            <p className='mb-5'>{impactCause.text}</p>

            <div className="relative group">
                <span
                    className="cursor-pointer">{impactCause.tooltipText}</span>
                <LearnMoreTooltip tooltips={impactCause.tooltips}/>
            </div>
        </div>
    )
}

export default function ImpactGraphic({impact}) {
    const impactCauses = impact.categories;
    const impactText = impact.text;
    const impactType = impact.type;


    return (
        <div className="flex flex-col justify-between text-sm">
            <div className="flex text-blue space-x-10 my-5">
                <div className="flex flex-col justify-between">
                    <Icon name={impactType}/>
                    <InfoIcon className="text-black"/>
                </div>
                <div className="flex space-x-5 text-center">
                    {impactCauses.map(impactCause => <ImpactCause key={impactCause.id} impactCause={impactCause}/>)}
                </div>
                <p>{impactText}</p>
            </div>
        </div>
    );
}