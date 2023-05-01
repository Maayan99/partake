import BlueButton from "@components/components/common/blue-button";

export default function EmployeeHeader({setIsAdmin}) {
    return (
        <div className="flex bg-black space-x-4 justify-center items-center py-2">
            <p className="text-white">You are in employee mode</p>
            <BlueButton onClick={() => {setIsAdmin(true)}}>Admin Mode</BlueButton>
        </div>
    )
}