import BlueButton from "@components/components/common/blueButton";

export default function AdminHeader({setIsAdmin}) {
    return (
        <div className="flex bg-black space-x-4 justify-center items-center py-2 ">
            <p className="text-white">You are in admin mode</p>
            <BlueButton onClick={() => {setIsAdmin(false)}}>Employee Mode</BlueButton>
        </div>
    )
}