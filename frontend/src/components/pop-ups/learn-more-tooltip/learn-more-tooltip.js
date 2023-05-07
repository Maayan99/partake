
export default function LearnMoreTooltip({text}) {
    return (
        <div
            className={`hidden flex-col items-center absolute text-left bg-white w-72 shadow-lg min-h-[160px]
                group-hover:flex p-4 border border-gray`}>
            <p className="text-md font-bold">How does it help?</p>
            <p className="mt-4 text-gray">{text}</p>
        </div>
    )
}