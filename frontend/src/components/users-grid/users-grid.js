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
        <div className="px-16 space-y-10">
            <h1 className="text-2xl font-bold">Users</h1>
            <table className="w-full border-collapse">
                <tbody>
                <tr className="p-2 bg-slate-50">
                    <th/>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Impact Score</th>
                    <th>Partake Coins</th>
                    <th>Pending Activities</th>
                </tr>

                <tr className="bg-important-blue">
                    <td>
                        <input type="checkbox" onChange={handleSelectAll} checked={filtered.every(user => selected.includes(user.id))}/>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-32" onChange={handleNameSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-28"
                                   onChange={handleDepartmentSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24" onChange={handleImpactSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24" onChange={handleCoinSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24" onChange={handleCoinSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                </tr>

                {filtered.map((user, index) =>
                    <tr key={user.id}
                        className={selected.includes(user.id) ? `${index % 2 === 0 ? 'bg-zebra-blue-on' : 'bg-zebra-blue-off'}` : `${index % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}>
                        <td>
                            <input id={user.id} checked={selected.includes(user.id)} onChange={handleSelect}
                                   type="checkbox"/>
                        </td>
                        <td>{user.username}</td>
                        <td>{user.department}</td>
                        <td>{user.impact}</td>
                        <td>{user.coins}</td>
                        <td>{user.pending}</td>
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