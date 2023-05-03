import BlueButton from "@components/components/common/blue-button";

export default function AdminHeader({setIsAdmin}) {
    const handleSetEmployee = () => {
        setIsAdmin(false);
        sessionStorage.setItem('isAdmin', "false");
    }

    return (
        <div className="flex bg-black space-x-4 justify-center items-center py-2 ">
            <p className="text-white">You are in admin mode</p>
            <BlueButton onClick={handleSetEmployee}>Employee Mode</BlueButton>
        </div>
    )
}