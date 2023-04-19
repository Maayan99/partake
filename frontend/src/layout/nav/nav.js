import {useEffect, useState, useSyncExternalStore} from "react";
import {AppBar, Box, Link, Toolbar} from "@mui/material";
import SelectedButton from "@components/components/common/selectedButton";
import UnselectedButton from "@components/components/common/unselectedButton";

const Nav = () => {
    const [selected, setSelected] = useState("");

    const options = ['give', 'take', 'make'];

    useEffect(() => {
        setSelected(sessionStorage.getItem("page"));
    }, []);

    const onOptionClick = (option) => {
        setSelected(option);
        window.location.href = '/' + option;
        sessionStorage.setItem("page", option);
    };

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Box display="flex" justifyContent="center" width="100%">
                    {options.map((option) => (
                        <Box key={option} mx={1}>
                            {selected === option ? (
                                <SelectedButton onClick={() => onOptionClick(option)}>
                                    {option}
                                </SelectedButton>
                            ) : (
                                <UnselectedButton onClick={() => onOptionClick(option)}>
                                    {option}
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