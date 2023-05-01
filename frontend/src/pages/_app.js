import '@components/styles/globals.css';
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";
import Nav from "@components/layout/nav/nav";
import UnloggedHeader from "@components/layout/unlogged-header/unlogged-header";
import React, {useEffect, useState} from "react";
import AdminHeader from "@components/layout/admin-header/admin-header";
import EmployeeHeader from "@components/layout/employee-header/employee-header";



export default function App({Component, pageProps}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("loggedIn") === "true") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);


    return (
        <>
            {isAdmin ? <AdminHeader setIsAdmin={setIsAdmin}/> : <EmployeeHeader setIsAdmin={setIsAdmin}/>}
            {loggedIn ? <Header/> : <UnloggedHeader/>}
            {loggedIn && <Nav isAdmin={isAdmin}/>}
            <Component loggedIn={loggedIn} setLoggedIn={setLoggedIn} {...pageProps} />
            <Footer/>
        </>)
}
