import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory, setPingCategory}) => {

    return (
        <div className="flex flex-col items-center justify-between w-full relative">
            <div className="relative group">
                <Icon onMouseEnter={() => setPingCategory(null)} name={impactCategory.icon} className={`w-14 h-14 mb-2 ${impactCategory.ping && 'animate-pulse'}`}/>
                {impactCategory.tooltips && <LearnMoreTooltip tooltips={impactCategory.tooltips}/>}
            </div>
            <div>
                {impactCategory.boldText && <h1 className="font-bold text-lg">{impactCategory.boldText}</h1>}
                {impactCategory.text && <span className="">{impactCategory.text}</span>}
            </div>
        </div>
    )
}

export default function ImpactGraphic({impact, setPingCategory}) {
    const {categories, type, total} = impact;


    return (
        <div className="flex flex-col justify-between text-sm w-full">
            <div className="flex text-blue space-x-10 my-5">
                {type && <Icon name={type} className="w-12 h-12"/>}
                <div className="flex space-x-5 w-full">
                    {categories.map(category => <ImpactCause key={category.id} impactCategory={category}
                                                             setPingCategory={setPingCategory}/>)}
                </div>
            </div>
            <h1 className="text-blue text-lg">Total Score: {total}</h1>
        </div>
    );
}