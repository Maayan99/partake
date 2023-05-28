import {useEffect, useState} from "react";
import IconButton from "@components/components/common/icon-button";
import Icon from "@components/components/common/icon/icon";
import ColoredButton from "@components/components/common/colored-button/colored-button";

export default function PartnerGrid({numberOfRows, paginate}) {
    const [nameSearch, setNameSearch] = useState('');
    const [departmentSearch, setDepartmentSearch] = useState('');
    const [impactSearch, setImpactSearch] = useState('');
    const [coinsSearch, setCoinsSearch] = useState('');
    const [selected, setSelected] = useState([]);
    const [show, setShow] = useState(numberOfRows);

    let filtered =
        [
            {
                id: '1',
                initiatives: 'Installing biogas service',
                leader: {
                    icon: 'adam',
                    name: 'Igud Arim Haifa',
                },
                partners: 'Electra, Home bi-',
                demands: 'Money donation, biogas',
                timeFrame: '3 years',
                status: 'Join',
            },

            {
                id: '2',
                initiatives: '',
                leader: {
                    icon: '',
                    name: '',
                },
                partners: '',
                demands: '',
                timeFrame: '',
                status: '',
            },

            {
                id: '3',
                initiatives: '',
                leader: {
                    icon: '',
                    name: '',
                },
                partners: '',
                demands: '',
                timeFrame: '',
                status: '',
            },

            {
                id: '4',
                initiatives: '',
                leader: {
                    icon: '',
                    name: '',
                },
                partners: '',
                demands: '',
                timeFrame: '',
                status: '',
            },

            {
                id: '5',
                initiatives: '',
                leader: {
                    icon: '',
                    name: '',
                },
                partners: '',
                demands: '',
                timeFrame: '',
                status: '',
            },

            {
                id: '6',
                initiatives: '',
                leader: {
                    icon: '',
                    name: '',
                },
                partners: '',
                demands: '',
                timeFrame: '',
                status: '',
            },

        ];

    if (nameSearch !== "") {
        filtered = filtered.filter(initiative => {
            return initiative.username.toLowerCase().includes(nameSearch.toLowerCase());
        })
    }

    if (departmentSearch !== "") {
        filtered = filtered.filter(initiative => {
            return initiative.department.toLowerCase().includes(departmentSearch.toLowerCase());
        })
    }

    if (impactSearch !== "") {
        filtered = filtered.filter(initiative => {
            return initiative.impact.includes(impactSearch);
        })
    }

    if (coinsSearch !== "") {
        filtered = filtered.filter(initiative => {
            return initiative.coins.includes(coinsSearch);
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
            setSelected(prev => prev.filter(initiative => initiative !== id));
        } else {
            setSelected(prev => [...prev, id]);
        }
    }

    const handleSelectAll = (event) => {
        if (event.target.checked) {

            //Add filtered ids to previous selected ids without duplicates
            setSelected((prev) => {
                const filteredIds = new Set(filtered.map((initiative) => initiative.id));
                return [...prev.filter((id) => !filteredIds.has(id)), ...filteredIds];
            });
        } else {
            const filteredIds = filtered.map(initiative => initiative.id);
            //Remove all filtered initiatives from selection
            console.log(selected);
            setSelected(prev => prev.filter(id => !filteredIds.includes(id)));
        }
    }


    return (
        <div className="px-16 space-y-10">
            <table className="w-full border-collapse">
                <tbody>
                <tr className="bg-slate-50">
                    <th/>
                    <th>Initiatives</th>
                    <th>Leader</th>
                    <th>Partners</th>
                    <th>Demands</th>
                    <th>Time frame</th>
                    <th>Status</th>
                </tr>

                <tr className="bg-important-blue">
                    <td>
                        <input type="checkbox" onChange={handleSelectAll}
                               checked={filtered.every(initiative => selected.includes(initiative.id))}/>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-32"
                                   onChange={handleNameSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-28"
                                   onChange={handleDepartmentSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24"
                                   onChange={handleImpactSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24"
                                   onChange={handleCoinSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24"
                                   onChange={handleCoinSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-24"
                                   onChange={handleCoinSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                </tr>

                {filtered.map((initiative, index) =>
                    <tr key={initiative.id}
                        className={selected.includes(initiative.id) ? `${index % 2 === 0 ? 'bg-zebra-blue-on' : 'bg-zebra-blue-off'}` : `${index % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}>
                        <td>
                            <input id={initiative.id} checked={selected.includes(initiative.id)} onChange={handleSelect}
                                   type="checkbox"/>
                        </td>
                        <td className="max-w-[40px] overflow-hidden"><p className="whitespace-nowrap">{initiative.initiatives}</p></td>
                        <td className="flex items-center w-36 overflow-hidden"><img
                            src={`/assets/PNG/logos/square/logo-s-${initiative.leader.icon}.png`} className="h-10 rounded-full"/>
                            <p className="whitespace-nowrap">{initiative.leader.name}</p></td>
                        <td className="max-w-[36px] overflow-hidden"><p className="whitespace-nowrap">{initiative.partners}</p></td>
                        <td className="max-w-[36px] overflow-hidden"><p className="whitespace-nowrap">{initiative.demands}</p></td>
                        <td className="max-w-[36px] overflow-hidden"><p className="whitespace-nowrap">{initiative.timeFrame}</p></td>
                        <td className="max-w-[36px] overflow-hidden"><ColoredButton className={`${initiative.status === 'Joined' ? 
                        'bg-green-500' : initiative.status === 'Join' ?
                        'bg-blue' : initiative.status === 'Pending' && 'bg-orange-400'} `}>{initiative.status}</ColoredButton></td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className="flex justify-between items-center">
                {paginate && <div className="flex space-x-3">
                    <p className="text-blue">Show</p>
                    <input type="text" className="text-blue w-9 text-center border border-gray"
                           value={Math.min(filtered.length, show)} disabled={filtered.length < show}
                           onChange={(e) => {
                               setShow(e.target.value)
                           }}></input>
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