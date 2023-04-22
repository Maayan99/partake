import {useEffect, useState, useSyncExternalStore} from "react";
import {AppBar, Box, Link, Toolbar} from "@mui/material";
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
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Box display="flex" justifyContent="center" width="100%">
                    {options.map((option) => (
                        <Box key={option} mx={1}>
                            {selected === option ? (
                                <SelectedButton onClick={() => onOptionClick(option)}>
                                    {capitalizedOptions[option]}
                                </SelectedButton>
                            ) : (
                                <UnselectedButton onClick={() => onOptionClick(option)}>
                                    {capitalizedOptions[option]}
                                </UnselectedButton>
                            )}
                        </Box>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};


export default Nav;