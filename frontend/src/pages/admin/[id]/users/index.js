import users from "../../../../../public/users";
import {useState} from "react";
import IconButton from "@components/components/common/icon-button";
import Icon from "@components/components/common/icon/icon";
import PrimaryButton from "@components/components/common/primary-button";

export default function AdminUsers() {
    const [nameSearch, setNameSearch] = useState('');
    const [departmentSearch, setDepartmentSearch] = useState('');
    const [impactSearch, setImpactSearch] = useState('');
    const [coinsSearch, setCoinsSearch] = useState('');
    const [selected, setSelected] = useState([]);
    const [show, setShow] = useState(25);

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
            setSelected(filtered.map(user => user.id));
        } else {
            setSelected([]);
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
                    <th>Impact</th>
                    <th>Coins</th>
                </tr>

                <tr className="bg-important-blue">
                    <td>
                        <input type="checkbox" onClick={handleSelectAll} checked={selected.length === filtered.length && selected.length !== 0}/>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray" onChange={handleNameSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray"
                                   onChange={handleDepartmentSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray" onChange={handleImpactSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray" onChange={handleCoinSearchChange}
                                   type="text"/>
                            <IconButton>
                                <Icon name="donation"/>
                            </IconButton>
                        </div>
                    </td>
                </tr>

                {filtered.map((user, index) =>
                    <tr key={user.id}
                        className={selected.includes(user.id) ? `${index % 2 === 0 ? 'bg-cyan-300' : 'bg-cyan-200'}` : `${index % 2 === 0 ? 'bg-light-gray' : ''}`}>
                        <td>
                            <input id={user.id} checked={selected.includes(user.id)} onChange={handleSelect}
                                   type="checkbox"/>
                        </td>
                        <td>{user.username}</td>
                        <td>{user.department}</td>
                        <td>{user.impact}</td>
                        <td>{user.coins}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <p className="text-blue">Show</p>
                    <input type="text" className="text-blue w-9 text-center border border-gray" value={Math.min(filtered.length, show)} disabled={filtered.length < show}
                           onChange={(e) => {setShow(e.target.value)}}></input>
                </div>

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

            <div className="flex space-x-3 items-center">
                <PrimaryButton className="flex items-center">
                    <Icon name="donation" className="mr-2"/>
                    Add users
                </PrimaryButton>
                <PrimaryButton>
                    Quick manage
                </PrimaryButton>
            </div>

            <div className="grid grid-cols-3 gap-9 w-full">
                <h1>Total active users <span className="text-blue">315</span></h1>
                <h1>Completed give activities <span className="text-blue">324</span></h1>
                <h1>Ongoing give activities <span className="text-blue">908</span></h1>
                <h1>Total activities <span className="text-blue">674</span></h1>
                <h1>Completed take activities <span className="text-blue">352</span></h1>
                <h1>Ongoing take activities <span className="text-blue">908</span></h1>
            </div>
        </div>
    )
}