import '@components/styles/globals.css';
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/nav/nav";
import UnloggedHeader from "@components/layout/unloggedHeader/unloggedHeader";
import React, {useEffect, useState} from "react";
import users from "@components/users";


export default function App({Component, pageProps}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('');
    const [profilePhotoURL, setProfilePhotoURL] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem("loggedIn") === "true") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        const storedUserId = sessionStorage.getItem('userId');
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        if (userId) {
            const foundUser = users.find(user => user.id === userId);
            setUser(foundUser);

            if (foundUser) {
                setProfilePhotoURL(`/assets/PNG/${foundUser.profileImage}`);
            }
        }
    }, [userId]);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue"/>
            </div>
        );
    }

    return (
        <>
            {loggedIn ? <Header user={user} profilePhotoURL={profilePhotoURL}/> : <UnloggedHeader/>}
            {loggedIn ? <Nav/> : <></>}
            <Component user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...pageProps} />
            <Footer/>
        </>)
}
