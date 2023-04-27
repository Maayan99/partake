import BlueButton from "@components/components/common/blueButton";
import {useUser} from "@components/components/userContext/userContext";

export default function Dashboard() {
    const {user, setUser} = useUser();

    const profileImage = `/assets/PNG/${user.profileImage}`

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