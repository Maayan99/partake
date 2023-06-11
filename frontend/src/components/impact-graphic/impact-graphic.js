import Icon from "@components/components/common/icon/icon";
import LearnMoreTooltip from "@components/components/pop-ups/learn-more-tooltip/learn-more-tooltip";

const ImpactCause = ({impactCategory}) => {

    return (
        <>
            {impactCategory.dontShow ? <div></div> :
                <div className="flex flex-col items-center w-full min-w-[85px]">
                    <Icon name={impactCategory.icon} className={`w-10 aspect-square mb-2`}/>
                    <div>
                        {impactCategory.boldText &&
                            <h1 className="font-bold text-[0.9rem] text-center leading-tight">{impactCategory.boldText}</h1>}
                        {impactCategory.text && <p className="text-center">{impactCategory.text}</p>}
                    </div>
                </div>}
        </>
    )
}

export default function ImpactGraphic({impact, showIconsBelow, dontShowTotal}) {
    const {categories, type, total} = impact;

    let filledUpCategories = [];

    for (let i = 0; i < 3; i++) {
        if (i < categories.length) {
            filledUpCategories[i] = categories[i];
        } else {
            filledUpCategories[i] = {dontShow: true};
        }
    }

    const tooltips = impact.tooltips || categories.map(category => (category.tooltips &&
        category.tooltips.map(tooltip => tooltip)));

    return (
        <div className="grid grid-cols-4 text-sm gap-4 mt-4 h-min">
            {type &&
                <div className="w-12 aspect-square outline outline-2 outline-offset-2 rounded-full p-2">
                    <Icon name={type} className="w-full aspect-square"/>
                </div>}
            {filledUpCategories.map(category => <ImpactCause key={category.id} impactCategory={category}/>)}
            {!type && <div></div>}
            {showIconsBelow && <div className="flex">
                <Icon name="info" className="h-6"/>
            </div>}
            {showIconsBelow && <h1 className="text-lg col-span-3">How does it help?</h1>}
            {showIconsBelow && tooltips.map((tooltip, index) =>
                <>
                    {index % 3 === 0 && <div></div>}
                    <div className="relative group">
                            <Icon name={tooltip.icon}
                                  className="h-9 mt-3"/>
                            <LearnMoreTooltip tooltip={tooltip}/>
                    </div>
                </>)}
            {!showIconsBelow && !dontShowTotal && <h1 className="text-blue col-span-2 text-lg mb-4">Your impact score: 7</h1>}
        </div>
    );
}