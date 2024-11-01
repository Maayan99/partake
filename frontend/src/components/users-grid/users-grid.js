import {useEffect, useState} from "react";
import users from "../../../public/users";
import IconButton from "@components/components/common/icon-button";
import Icon from "@components/components/common/icon/icon";
import PrimaryButton from "@components/components/common/primary-button";

export default function UsersGrid({numberOfRows, paginate}) {
    const [nameSearch, setNameSearch] = useState('');
    const [departmentSearch, setDepartmentSearch] = useState('');
    const [impactSearch, setImpactSearch] = useState('');
    const [coinsSearch, setCoinsSearch] = useState('');
    const [selected, setSelected] = useState([]);
    const [show, setShow] = useState(numberOfRows);

    let filtered = users;

    if (nameSearch !== "") {
        filtered = filtered.filter(user => {
            return user.username.toLowerCase().includes(nameSearch.toLowerCase());
        })
    }

    if (departmentSearch !== "") {
        filtered = filtered.filter(user => {
            return user.department.toLowerCase().includes(departmentSearch.toLowerCase());
        })
    }

    if (impactSearch !== "") {
        filtered = filtered.filter(user => {
            return user.impact.includes(impactSearch);
        })
    }

    if (coinsSearch !== "") {
        filtered = filtered.filter(user => {
            return user.coins.includes(coinsSearch);
        })
    }


    filtered = filtered.slice(0, show);

    const handleNameSearchChange = (event) => {
        setNameSearch(event.target.value);
    };

    const handleDepartmentSearchChange = (event) => {
        setDepartmentSearch(event.target.value);
    };

    const handleImpactSearchChange = (event) => {
        setImpactSearch(event.target.value);
    };

    const handleCoinSearchChange = (event) => {
        setCoinsSearch(event.target.value);
    };

    const handleSelect = (event) => {
        const id = event.target.id;
        if (selected.includes(id)) {
            setSelected(prev => prev.filter(user => user !== id));
        } else {
            setSelected(prev => [...prev, id]);
        }
    }

    const handleSelectAll = (event) => {
        if (event.target.checked) {

            //Add filtered ids to previous selected ids without duplicates
            setSelected((prev) => {
                const filteredIds = new Set(filtered.map((user) => user.id));
                return [...prev.filter((id) => !filteredIds.has(id)), ...filteredIds];
            });
        } else {
            const filteredIds = filtered.map(user => user.id);
            //Remove all filtered users from selection
            console.log(selected);
            setSelected(prev => prev.filter(id => !filteredIds.includes(id)));
        }
    }


    return (
        <div className="px-0 space-y-10">
            <table className="w-full border-collapse table-fixed border border-slate-300">
                <tbody>
                <tr className="p-2 bg-slate-50">
                    <th className="w-4"/>
                    <th className="w-52">Name</th>
                    <th>Department</th>
                    <th>Impact Score</th>
                    <th>Partake Coins</th>
                    <th>Pending Activities</th>
                    <th>Completed Activities</th>
                </tr>

                <tr className="bg-important-blue">
                    <td className="w-4 py-4">
                        <input type="checkbox" onChange={handleSelectAll} checked={filtered.every(user => selected.includes(user.id))}/>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-full" onChange={handleNameSearchChange}
                                type="text"/>    
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-full"
                                onChange={handleDepartmentSearchChange}
                                type="text"/>
                                <Icon name="down-arrow" className="w-4 -ml-5"/>                    
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-full" onChange={handleImpactSearchChange}
                                type="text"/>
                                <Icon name="down-arrow" className="w-4 -ml-5"/> 
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-full" onChange={handleCoinSearchChange}
                                type="text"/>
                                <Icon name="down-arrow" className="w-4 -ml-5"/> 
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-full" onChange={handleCoinSearchChange}
                            type="text"/>
                            <Icon name="down-arrow" className="w-4 -ml-5"/> 
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-full" onChange={handleCoinSearchChange}
                                type="text"/>
                                <Icon name="down-arrow" className="w-4 -ml-5"/> 
                        </div>
                    </td>
                </tr>

                {filtered.map((user, index) =>
                    <tr key={user.id}
                        className={selected.includes(user.id) ? `bg-gradient-to-r ${index % 2 === 0 ? 'from-[#a38bff] to-[#4eaeff]' : 'from-[#00cfff] to-[#4eaeff]'}` : `${index % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}>
                        <td>
                            <input id={user.id} checked={selected.includes(user.id)} onChange={handleSelect}
                                   type="checkbox"/>
                        </td>
                        <td className="border-r border-slate-300">
                            <div className="flex gap-2 items-center">
                                <img src={`/assets/PNG/profile-images/${user.profileImage}`} className="h-8"/>
                                {user.username}
                            </div>
                            </td>
                        <td className="border-r border-slate-300">{user.department}</td>
                        <td className="border-r border-slate-300">{user.impact}</td>
                        <td className="border-r border-slate-300">{user.coins}</td>
                        <td className="border-r border-slate-300">{user.pending}</td>
                        <td className="border-r border-slate-300">{user.completed}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className="flex justify-between items-center">
                {paginate && <div className="flex space-x-3">
                    <p className="text-blue">Show</p>
                    <input type="text" className="text-blue w-9 text-center border border-gray" value={Math.min(filtered.length, show)} disabled={filtered.length < show}
                           onChange={(e) => {setShow(e.target.value)}}></input>
                </div>}

                {filtered.length > 25 && <div className="flex space-x-3 items-center">
                    <IconButton>
                        <Icon name="donation"/>
                    </IconButton>
                    <div className="border border-gray px-2">
                        <p className="text-blue">1/3</p>
                    </div>
                    <IconButton>
                        <Icon name="donation"/>
                    </IconButton>
                </div>}
            </div>
        </div>
    )
}