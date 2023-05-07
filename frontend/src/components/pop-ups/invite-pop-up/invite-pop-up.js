import CloseIcon from '@mui/icons-material/Close';
import PopUp from "@components/components/pop-ups/basic-pop-up/pop-up";
import IconButton from "@components/components/common/icon-button";
import {useEffect, useState} from "react";
import users from "../../../../public/users";
import giveData from "../../../../public/give-data";
import BlueButton from "@components/components/common/blue-button";

const UserRow = ({user, selected, setSelected}) => {
    const {profileImage, username, id} = user;

    const handleSelect = (event) => {
        if (selected.includes(id)) {
            setSelected(prev => prev.filter(user => user !== id));
        } else {
            setSelected(prev => [...prev, id]);
        }
    }

    return (
        <div className="flex items-center cursor-pointer space-x-3" onClick={handleSelect}>
            <input type="checkbox" checked={selected.includes(id)}/>
            <div className="flex items-center">
                <img
                    src={`/assets/PNG/${profileImage}`}
                    alt="profile"
                    className="h-8 w-8 border border-1 border-white object-cover rounded-full mr-2"
                />
                <span>{username}</span>
            </div>
        </div>
    );
};

export default function InvitePopUp({display, setDisplay}) {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState([]);

    let filtered = users;

    if (search !== "") {
        filtered = filtered.filter(user => {
            return user.username.toLowerCase().includes(search.toLowerCase());
        })
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };


    const handleSubmit = () => {
        setDisplay(false);
    }

    return (
        <PopUp display={display}>
            <div className="bg-blue p-4 flex text-white">
                <IconButton onClick={() => setDisplay(false)}>
                    <CloseIcon/>
                </IconButton>
                <h1 className="absolute left-1/2 -translate-x-1/2">Invite Friends</h1>
            </div>
            <div className="p-10 flex flex-col">
                <input placeholder="Search"
                       className="pl-3 shadow bg-light-gray w-full h-10 focus:outline-none placeholder:italic"
                       onChange={handleSearchChange} value={search}/>

                <p className="font-bold mt-3">Recommended:</p>

                <div className="overflow-auto h-36 w-full shadow bg-light-gray p-4 space-y-2 my-2">
                    {users.slice(3, 6).map(user =>
                        <UserRow user={user} key={user.id} selected={selected} setSelected={setSelected}/>)}
                </div>

                <div className="overflow-auto h-48 w-full shadow bg-light-gray p-4 space-y-2 my-4">
                    {filtered.map(user =>
                        <UserRow user={user} key={user.id} selected={selected} setSelected={setSelected}/>)}
                </div>

                <div className="flex justify-center">
                    <BlueButton onClick={handleSubmit} className="w-2/3">Send Invitations</BlueButton>
                </div>
            </div>

        </PopUp>
    )
}