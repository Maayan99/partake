import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory}) => {

    return (
        <div className="flex flex-col items-center w-max relative">
            <div className="relative group">
                <Icon name={impactCategory.icon} className={`w-10 h-10 mb-2`}/>
                {impactCategory.tooltips && <LearnMoreTooltip tooltips={impactCategory.tooltips}/>}
            </div>
            <div>
                {impactCategory.boldText &&
                    <h1 className="font-bold text-lg text-center">{impactCategory.boldText}</h1>}
                {impactCategory.text && <span className="">{impactCategory.text}</span>}
            </div>
        </div>
    )
}

export default function ImpactGraphic({impact, showIconsBelow}) {
    const {categories, type, total} = impact;


    return (
        <div className="grid grid-cols-[20%_auto] text-sm w-max space-y-4">
            {type && <Icon name={type} className="w-10 h-10"/>}
            <div className="flex space-x-4 w-full">
                {categories.map(category => <ImpactCause key={category.id} impactCategory={category}/>)}
            </div>
            <Icon name="info-circle" className="h-6"/>

            {showIconsBelow &&
                <div className="space-y-2">
                    <h1>How does this help?</h1>
                    <div className="flex space-x-4">
                        {categories.map(category => (category.tooltips &&
                            category.tooltips.map(tooltip => <Icon name={tooltip.icon}
                                                                   className="h-14"/>)))}
                    </div>
                </div>}
        </div>
    );
}