import '@components/styles/globals.css';
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/nav/nav";
import UnloggedHeader from "@components/layout/unlogged-header/unlogged-header";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import ModeTooltip from "@components/layout/mode-header/mode-tooltip";
import LoadingSpinner from "@components/components/loading-spinner/loading-spinner";


export default function App({Component, pageProps}) {
    const [loadedAdmin, setLoadedAdmin] = useState(false);
    const [loadedLoggedIn, setLoadedLoggedIn] = useState(true);

    const [loggedIn, setLoggedIn] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const updateLoggedIn = useCallback(() => {
        setLoadedLoggedIn(true);
        //setLoggedIn(sessionStorage.getItem("loggedIn") === "true");
    }, []);
    const updateIsAdmin = useCallback(() => {
        setLoadedAdmin(true);
        setIsAdmin(sessionStorage.getItem("isAdmin") === "true");
    }, []);

    useEffect(() => {
        updateIsAdmin();
        updateLoggedIn();
    }, [])

    if (!loadedLoggedIn || !loadedAdmin) {
        return <LoadingSpinner/>;
    }

    return (
        <>
            <ModeTooltip isAdmin={isAdmin} updateIsAdmin={updateIsAdmin}/>
            {loggedIn ? <Header/> : <UnloggedHeader/>}
            {loggedIn && <Nav isAdmin={isAdmin}/>}
            <Component loggedIn={loggedIn} {...pageProps} />
            <Footer/>
        </>
    )
}
