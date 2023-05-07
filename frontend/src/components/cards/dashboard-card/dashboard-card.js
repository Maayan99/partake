export default function DashboardCard ({children, className}){
    return (
        <div className={`bg-white rounded-lg shadow-lg p-10 w-full ${className}`}>
            {children}
        </div>
    )
}