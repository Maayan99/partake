import {useState} from "react";
import {AppBar, Box, Toolbar} from "@mui/material";
import PrimaryButton from "@components/components/common/primaryButton";
import SelectedButton from "@components/components/common/selectedButton";
import UnselectedButton from "@components/components/common/unselectedButton";

const Nav = () => {
    const [selected, setSelected] = useState('Do Good');

    const options = ['Give', 'Take', 'Make'];

    const onOptionClick = (option) => {
        setSelected(option);
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