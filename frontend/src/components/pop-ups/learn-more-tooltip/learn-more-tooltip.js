import Icon from "@components/components/common/icon/icon";

export default function LearnMoreTooltip({tooltips}) {
    return (
        <div
            className={`hidden flex-col items-center absolute text-left bg-white w-72 shadow-lg
                group-hover:flex p-4 border border-gray`}>
            <p className="text-md font-bold">How does it help?</p>
            {tooltips.map(tooltip =>
                <div>
                    <Icon name={tooltip.icon} className="w-5 h-5 mt-4 float-left"/>
                    <p className="mt-4 text-gray">{tooltip.text}</p>
                </div>)}
        </div>
    )
}