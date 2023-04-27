import {useEffect, useState} from "react";
import SelectedButton from "@components/components/common/selectedButton";
import UnselectedButton from "@components/components/common/unselectedButton";

const Nav = () => {
    const [selected, setSelected] = useState("");
    const [animateNav, setAnimateNav] = useState(false);


    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 140) {
                setAnimateNav(true);
            } else setAnimateNav(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    const options = ['give', 'take', 'make'];

    const capitalizedOptions =
        {
            give: 'Give',
            take: 'Take',
            make: 'Make',
        };

    useEffect(() => {
        const option = window.location.pathname.split("/")[1];
        setSelected(option);
    }, []);

    const onOptionClick = (option) => {
        window.location.href = '/' + option;
    };

    return (
        <div className={`sticky top-0 bg-white w-full flex justify-center space-2.5 py-4 z-20 mb-32
        transition ease-in-out duration-500 ${animateNav && 'shadow-xl backdrop-blur-md bg-opacity-50'}`}>
            {options.map((option) => (
                <div key={option}>
                    {selected === option ? (
                        <SelectedButton onClick={() => onOptionClick(option)}>
                            {capitalizedOptions[option]}
                        </SelectedButton>
                    ) : (
                        <UnselectedButton onClick={() => onOptionClick(option)}>
                            {capitalizedOptions[option]}
                        </UnselectedButton>
                    )}
                </div>
            ))}
        </div>
    );
};


export default Nav;