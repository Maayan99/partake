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
                    icon: 'igud',
                    name: 'Igud Arim Haifa',
                },
                partners:
                    [
                        {
                            icon: 'biogas',
                            name: 'Home Biogas',
                        }
                    ],
                demands: 'Money donation, biogas system installing',
                timeFrame: '3 years',
                scope: '2',
                status: 'Join',
            },

            {
                id: '2',
                initiatives: 'Cleaning in Ein-Gedi park',
                leader: {
                    icon: 'elem',
                    name: 'Elem',
                },
                partners:
                    [
                        {
                            icon: 'mahne',
                            name: 'Mhaneyuda group',
                        }
                    ],
                demands: 'A bus from Tel Aviv to Ein-Gedi',
                timeFrame: '1 day',
                scope: '3',
                status: 'Join',
            },

            {
                id: '3',
                initiatives: 'Terror victims fundraising',
                leader: {
                    icon: 'lohamim',
                    name: 'fighting for Life',
                },
                partners:
                    [
                        {
                            icon: 'fb',
                            name: 'Facebook Israel',
                        }
                    ],
                demands: 'Hosting place in Ramle, catering',
                timeFrame: '1 day',
                scope: '3',
                status: 'Joined',
            },

            {
                id: '4',
                initiatives: 'Solar panels installment',
                leader: {
                    icon: 'heshel',
                    name: 'Heshel Center',
                },
                partners:
                    [
                        {
                            icon: 'electra',
                            name: 'Electra',
                        }
                    ],
                demands: 'Money donation, food delivery',
                timeFrame: '6 hours',
                scope: '1',
                status: 'Joined',
            },

            {
                id: '5',
                initiatives: 'awareness campaign',
                leader: {
                    icon: 'matav',
                    name: 'Matav',
                },
                partners:
                    [
                        {
                            icon: 'hapoalim',
                            name: 'Bank HaPoalim',
                        }
                    ],
                demands: 'Ad campaign, print and web',
                timeFrame: '3 days',
                scope: '3',
                status: 'Pending',
            },

            {
                id: '6',
                initiatives: 'Nonprofit advertising',
                leader: {
                    icon: 'ilan',
                    name: 'Ilan',
                },
                partners:
                    [
                        {
                            icon: 'mccann',
                            name: 'McCann Tel Aviv',
                        }
                    ],
                demands: 'Online advertising, design, art direction',
                timeFrame: '1 week',
                scope: '2',
                status: 'Pending',
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
        <div className="px-0 space-y-10">
            <table className="w-full border-collapse table-fixed border border-slate-300">
                <tbody>
                <tr className="p-2 bg-slate-50">
                    <th className="w-4"/>
                    <th className="w-48">Initiatives</th>
                    <th className="w-[180px]">Leader</th>
                    <th>Partners</th>
                    <th>Demands</th>
                    <th className="w-[130px]">Time frame</th>
                    <th className="w-24">Scope</th>
                    <th className="w-40">Status</th>
                </tr>

                <tr className="bg-important-blue">
                    <td className="w-4 py-4">
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
                            <input className="rounded-none border border-light-gray w-32"
                                   onChange={handleImpactSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-32"
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
                            <input className="rounded-none border border-light-gray w-16"
                                   onChange={handleCoinSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                    <td>
                        <div className="flex">
                            <input className="rounded-none border border-light-gray w-32"
                                   onChange={handleCoinSearchChange}
                                   type="text"/>
                        </div>
                    </td>
                </tr>

                {filtered.map((initiative, index) =>
                    <tr key={initiative.id}
                        className={selected.includes(initiative.id) ? `bg-gradient-to-r ${index % 2 === 0 ? 'from-[#a38bff] to-[#4eaeff]' : 'from-[#00cfff] to-[#4eaeff]'}` : `${index % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}>
                        <td>
                            <input id={initiative.id} checked={selected.includes(initiative.id)} onChange={handleSelect}
                                   type="checkbox"/>
                        </td>
                        <td className="max-w-[40px] overflow-hidden border-r border-slate-300"><p
                            className="whitespace-nowrap">{initiative.initiatives}</p></td>
                        <td className="flex items-center w-48 overflow-hidden border-r border-slate-300 px-2"><img
                            src={`/assets/PNG/logos/square/logo-s-${initiative.leader.icon}.png`}
                            className="h-10 p-1 rounded-full"/>
                            <p className="whitespace-nowrap pl-2">{initiative.leader.name}</p></td>
                        <td className="max-w-[96px] overflow-hidden border-r border-slate-300">
                            <div className="flex pl-0">
                                {initiative.partners.map((partner, index) =>
                                    <div key={index} className="flex">
                                        {partner.icon && <img
                                            src={`/assets/PNG/logos/square/logo-s-${partner.icon}.png`}
                                            className="h-10 p-1 rounded-full pt-1"/>}
                                        <p className="mt-2 pl-3">{partner.name}</p>
                                    </div>
                                )}
                            </div>
                        </td>
                        <td className="max-w-[36px] overflow-hidden border-r border-slate-300"><p
                            className="whitespace-nowrap">{initiative.demands}</p></td>
                        <td className="max-w-[36px] overflow-hidden border-r border-slate-300"><p
                            className="whitespace-nowrap">{initiative.timeFrame}</p></td>
                        <td className="max-w-[36px] overflow-hidden border-r border-slate-300"><p
                            className="whitespace-nowrap">{initiative.scope}</p></td>
                        <td className="max-w-[36px] overflow-hidden border-r border-slate-300"><ColoredButton
                            className={`${initiative.status === 'Joined' ?
                                'bg-green-500' : initiative.status === 'Join' ?
                                    'bg-blue' : initiative.status === 'Pending' && 'bg-orange-400'} w-28 hover:bg-black `}>{initiative.status}</ColoredButton>
                        </td>
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