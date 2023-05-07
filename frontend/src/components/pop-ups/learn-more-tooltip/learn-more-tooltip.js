
export default function LearnMoreTooltip({text, className}) {
    return (
        <div
            className={`hidden ${className} 
                flex-col items-center absolute text-left bg-white w-72
                 shadow-lg group-hover:flex
                 p-4 border border-gray`}>
            <p className="text-md font-bold">How does it help?</p>
            <p className="mt-4 text-gray">{text}</p>
        </div>
    )
}