import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory}) => {

    return (
        <div className="flex flex-col items-center w-min relative">
            <Icon name={impactCategory.icon} className={`w-10 h-10 mb-2`}/>
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
            {type && <Icon name={type} className=" aspect-square border border-2 rounded-full p-3"/>}
            <div className="flex space-x-4 w-full">
                {categories.map(category => <ImpactCause key={category.id} impactCategory={category}/>)}
            </div>
            <div className="flex justify-center">
            <Icon name="info-circle" className="h-6"/>
            </div>
            {showIconsBelow &&
                <div className="space-y-2">
                    <h1 className="text-lg">How does this help?</h1>
                    <div className="relative group flex space-x-4">
                        {categories.map(category => (category.tooltips &&
                            category.tooltips.map(tooltip => <>
                                <Icon name={tooltip.icon}
                                      className="h-10 mt-3"/>
                                <LearnMoreTooltip tooltip={tooltip}/>
                            </>)))}
                    </div>
                </div>}
        </div>
    );
}