import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory}) => {

    return (
        <div className="flex flex-col items-center w-min relative">
            <Icon name={impactCategory.icon} className={`min-w-[40px] aspect-square mb-2`}/>
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
        <div className="grid grid-cols-[30%_80%] text-sm w-max gap-4">
            {type && <Icon name={type} className="aspect-square border border-2 rounded-full p-3"/>}
            <div className="flex space-x-16 w-full ml-10">
                {categories.map(category => <ImpactCause key={category.id} impactCategory={category}/>)}
            </div>
            {showIconsBelow && <div className="flex justify-center">
                <Icon name="info-circle" className="h-6"/>
            </div>}
            {showIconsBelow ?
                <div className="space-y-2">
                    <h1 className="text-lg">How does this help?</h1>
                    <div className="flex space-x-12">
                        {categories.map(category => (category.tooltips &&
                            category.tooltips.map(tooltip => <div className="relative group">
                                <Icon name={tooltip.icon}
                                      className="h-6 mt-3"/>
                                <LearnMoreTooltip tooltip={tooltip}/>
                            </div>)))}
                    </div>
                </div> :
                <h1 className="text-blue col-span-2">Your impact score: 7</h1>}
        </div>
    );
}