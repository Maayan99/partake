import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory}) => {

    return (
        <div className="flex flex-col items-center w-max relative min-w-[50px]">
            <Icon name={impactCategory.icon} className={`min-w-[40px] max-w-[40px] aspect-square mb-2`}/>
            <div>
                {impactCategory.boldText &&
                    <h1 className="font-bold text-lg text-center leading-tight">{impactCategory.boldText}</h1>}
                {impactCategory.text && <p className="text-center">{impactCategory.text}</p>}
            </div>
        </div>
    )
}

export default function ImpactGraphic({impact, showIconsBelow, dontShowTotal}) {
    const {categories, type, total} = impact;


    return (
        <div className="grid grid-cols-[15%_75%] text-sm w-full gap-4 mt-4">
            {type &&
                <div className="w-12 aspect-square outline outline-2 outline-offset-2 rounded-full p-2">
                    <Icon name={type} className="w-full aspect-square"/>
                </div>}
            <div className="flex space-x-16 w-full ml-10">
                {categories.map(category => <ImpactCause key={category.id} impactCategory={category}/>)}
            </div>
            {showIconsBelow && <div className="flex justify-center">
                <Icon name="info" className="h-6"/>
            </div>}
            {showIconsBelow ?
                <div className="space-y-2">
                    <h1 className="text-lg">How does it help?</h1>
                    <div className="flex space-x-12">
                        {categories.map(category => (category.tooltips &&
                            category.tooltips.map(tooltip => <div className="relative group">
                                <Icon name={tooltip.icon}
                                      className="h-9 mt-3"/>
                                <LearnMoreTooltip tooltip={tooltip}/>
                            </div>)))}
                    </div>
                </div> :
                <>{!dontShowTotal && <h1 className="text-blue col-span-2 text-lg mb-4">Your impact score: 7</h1>}</>}
        </div>
    );
}