import Icon from "@components/components/common/icon/icon";

export default function LearnMoreTooltip({tooltip}) {
    return (
        <div
            className={`hidden flex-col top-12 left-8 items-center absolute text-left bg-white w-72 shadow-lg
                group-hover:flex p-4 border border-gray z-10`}>
            <p className="text-md font-bold">How does it help?</p>
                <div>
                    <Icon name={tooltip.icon} className="w-5 h-5 mt-4 float-left"/>
                    <p className="mt-4 text-gray">{tooltip.text}</p>
                </div>
        </div>
    )
}