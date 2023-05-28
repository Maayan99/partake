export default function ProgressBar({percentage, className}) {
    return (
        <div className={`h-2.5 w-full bg-[#E5E5E5] ${className}`}>
            <div className="bg-blue h-full" style={{width: `${percentage}%`}}/>
        </div>
    )
}