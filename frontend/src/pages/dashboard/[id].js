import BlueButton from "@components/components/common/blue-button";

export default function Dashboard() {

    const profileImage = `/assets/PNG/profile_image_1.jpeg`

    const handleLogout = () => {
        sessionStorage.setItem('loggedIn', 'false');
        sessionStorage.removeItem('userId');
        window.location.href = '/';
    }

    return (
        <div >
            <img src={profileImage} alt="Profile image" className="rounded-full
            w-52 h-52 outline outline-offset-8 outline-blue outline-2 object-cover"/>
            <BlueButton onClick={handleLogout}>Logout</BlueButton>
        </div>
    );
};