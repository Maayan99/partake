import NavButton from "@components/components/common/nav-button/nav-button";
import {useEffect, useState} from "react";

export default function AdminNav( {baseUrl} ) {
    const [selected, setSelected] = useState('1')
    const options = [
        {
            url: 'dashboard',
            text: "Dashboard",
            id: '2'
        },
        {
            url: 'users',
            text: "Users",
            id: '3'
        },
        {
            url: 'activities',
            text: "Activities",
            id: '4'
        },
        {
            url: 'company-impact',
            text: "Company's Impact",
            id: '5'
        },
        {
            url: 'coins',
            text: "Partake Coins",
            id: '6'
        },
        {
            url: 'reward-program',
            text: "Reward Program",
            id: '7'
        },
        {
            url: 'donation-matching',
            text: "Donation Matching",
            id: '8'
        },
        {
            url: 'market',
            text: "Market",
            id: '9'
        },
        {
            url: 'reports',
            text: "Reports",
            id: '10'
        },
    ]

    const idToUrl = {
        '1': 'pending-requests',
        '2': 'dashboard',
        '3': 'users',
        '4': 'activities',
        '5': 'company-impact',
        '6': 'coins',
        '7': 'reward-program',
        '8': 'donation-matching',
        '9': 'market',
        '10': 'reports',
    }

    const urlToId = {
        'pending-requests': '1',
        'dashboard': '2',
        'users': '3',
        'activities': '4',
        'company-impact': '5',
        'coins': '6',
        'reward-program': '7',
        'donation-matching': '8',
        'market': '9',
        'reports': '10',
    }

    const handleClick = (e) => {
        const targetUrl = idToUrl[e.target.value];

        window.location.href = `${baseUrl}/${targetUrl}`
    }

    useEffect(() => {
        const option = window.location.pathname.split("/")[3];
        const id = urlToId[option];

        setSelected(id);
    })

    return (
        <div className="bg-white shadow-inner min-w-[240px] border border-gray border-l-0 space-y-7 py-8">
            <div className="flex items-center">
            <NavButton onClick={handleClick} value='1'>Pending Requests</NavButton>
                <div className="h-3.5 w-3.5 bg-orange-300 rounded-full"/>
            </div>
            {options.map(option => (option.id !== selected) ?
                <NavButton onClick={handleClick} value={option.id} key={option.id}>{option.text}</NavButton> :
                <NavButton onClick={handleClick} value={option.id} key={option.id} className="font-bold">{option.text}</NavButton>)}
        </div>
    )
}