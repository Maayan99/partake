import '@components/styles/globals.css';
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/nav/nav";
import UnloggedHeader from "@components/layout/unlogged-header/unlogged-header";
import React, {useEffect, useState} from "react";
import AdminHeader from "@components/layout/admin-header/admin-header";
import EmployeeHeader from "@components/layout/employee-header/employee-header";
import ModeTooltip from "@components/layout/mode-header/mode-tooltip";


export default function App({Component, pageProps}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const load = async () => {
            if (sessionStorage.getItem("loggedIn") === "true") {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }

            if (sessionStorage.getItem("isAdmin") === "true") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        }

        load();
        setLoaded(true);

    }, []);


    if (!loaded) {
        return <></>
    }

    return (
        <>
            <ModeTooltip setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
            {loggedIn ? <Header/> : <UnloggedHeader/>}
            {loggedIn && <Nav isAdmin={isAdmin}/>}
            <Component loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...pageProps} />
            <Footer/>
        </>
    )
}
