export default function DashboardCard ({children, className, title}){
    return (
        <div className={`relative bg-white rounded-xl shadow-lg p-10 w-full border border-b-0 border-l-0
         border-r-0 border-t-[20px] ${className}`}>
            {children}
        </div>
    )
}