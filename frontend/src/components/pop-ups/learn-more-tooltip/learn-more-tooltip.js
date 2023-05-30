import Icon from "@components/components/common/icon/icon";

export default function LearnMoreTooltip({tooltip}) {
    return (
        <div
            className={`hidden flex-col top-full left-1/2 -translate-x-1/2 items-center
             absolute text-center bg-white w-80 shadow-lg
                group-hover:flex px-6 mt-2 pt-0 pb-4 border border-gray z-10`}>
            <div className="w-5 h-5 m-0 float-left"/>
            {tooltip.title && <h1 className="text-lg mb-2">{tooltip.title}</h1>}
            <p className="mb-2 text-gray text-base">{tooltip.text}</p>
        </div>
    )
}