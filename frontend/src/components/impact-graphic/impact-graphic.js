import InfoIcon from "@mui/icons-material/Info";
import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory}) => {

    return (
        <div className="flex flex-col items-center justify-between min-h-[150px]">
            <Icon name={impactCategory.icon} className="w-12 h-12"/>
            <div>
                {impactCategory.boldText && <h1 className="font-bold text-xl">{impactCategory.boldText}</h1>}
                {impactCategory.text && <span className="">{impactCategory.text}</span>}
            </div>
            <div className="flex grow"/>
            <div className="relative group">
                <span
                    className="cursor-pointer">{impactCategory.tooltipText}</span>
                {impactCategory.tooltips && <LearnMoreTooltip tooltips={impactCategory.tooltips}/>}
            </div>
        </div>
    )
}

export default function ImpactGraphic({impact}) {
    const {categories, type} = impact;


    return (
        <div className="flex flex-col justify-between text-sm">
            <div className="flex text-blue space-x-10 my-5">
                <div className="flex flex-col justify-between">
                    <Icon name={type}/>
                    <Icon name="info-circle" className="h-7 w-7"/>
                </div>
                <div className="flex space-x-5 text-center">
                    {categories.map(category => <ImpactCause key={category.id} impactCategory={category}/>)}
                </div>
            </div>
        </div>
    );
}