import {useEffect, useState} from "react";
import SelectedButton from "@components/components/common/selectedButton";
import UnselectedButton from "@components/components/common/unselectedButton";

const Nav = () => {
    const [selected, setSelected] = useState("");

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
        <div className="flex justify-center space-2.5 mb-8">
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