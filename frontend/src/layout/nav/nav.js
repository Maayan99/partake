import {useEffect, useState} from "react";
import SelectedButton from "@components/components/common/selected-button";
import UnselectedButton from "@components/components/common/unselected-button";

const Nav = ({isAdmin}) => {
    const [selected, setSelected] = useState("");
    const [animateNav, setAnimateNav] = useState(false);
    const [options, setOptions] = useState(['give', 'take', 'make', 'get'])


    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 100) {
                setAnimateNav(true);
            } else setAnimateNav(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    useEffect(() => {
        if (isAdmin) {
            setOptions( ['admin', 'give', 'take', 'make']);
        } else {
            setOptions(['give', 'take', 'make', 'get']);
        }
    }, [isAdmin]);


    const capitalizedOptions =
        {
            give: 'Give',
            take: 'Take',
            make: 'Make',
            get: 'Get',
            admin: 'Admin',
        };

    useEffect(() => {
        const option = window.location.pathname.split("/")[1];
        setSelected(option);
    }, []);

    const handleOptionClick = (option) => {
        if (option === 'admin') {
            if (isAdmin) {
                window.location.href = '/admin/oiuadsfhli1u32e/dashboard';
            }
        } else {
            window.location.href = '/' + option;
        }
    };

    return (
        <div className={`sticky top-0 bg-white w-full flex justify-center space-2.5 py-4 z-20 mb-20
        transition ease-in-out duration-500 ${animateNav && 'shadow-xl backdrop-blur-md bg-opacity-50'}`}>
            {options.map((option) => (
                <div key={option}>
                    {selected === option ? (
                        <SelectedButton onClick={() => handleOptionClick(option)}>
                            {capitalizedOptions[option]}
                        </SelectedButton>
                    ) : (
                        <UnselectedButton onClick={() => handleOptionClick(option)}>
                            {capitalizedOptions[option]}
                        </UnselectedButton>
                    )}
                </div>
            ))}
        </div>
    );
};


export default Nav;