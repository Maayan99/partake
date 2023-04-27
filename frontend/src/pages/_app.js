import '@components/styles/globals.css';
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/nav/nav";
import UnloggedHeader from "@components/layout/unloggedHeader/unloggedHeader";
import React, {useEffect, useState} from "react";


//TODO: Landing screen
//TODO: Confetti screen
//TODO: Full take flow
//TODO:

export default function App({Component, pageProps}) {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("loggedIn") === "true") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);


    return (
        <>
            {loggedIn ? <Header/> : <UnloggedHeader/>}
            {loggedIn ? <Nav/> : <></>}
            <Component loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...pageProps} />
            <Footer/>
        </>)
}
