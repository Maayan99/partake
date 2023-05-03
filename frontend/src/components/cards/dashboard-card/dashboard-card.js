export default function DashboardCard ({children, className}){
    return (
        <div className={`bg-white rounded-b-lg shadow-lg p-10 min-w-[350px] ${className}`}>
            {children}
        </div>
    )
}