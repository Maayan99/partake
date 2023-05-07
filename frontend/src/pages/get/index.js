import getData from "../../../public/get-data";
import SmallGetCard from "@components/components/cards/small-get-card/small-get-card";
import {useState} from "react";
import GetButton from "@components/components/common/get-button/get-button";

export default function Get() {
    let filtered = getData;

    const [selectedCategory, setSelectedCategory] = useState('1');

    const categories = [
        {
            id: '1',
            text: 'Social',
        },
        {
            id: '2',
            text: 'Sustainability',
        },
        {
            id: '3',
            text: 'Philanthropy',
        },
        {
            id: '4',
            text: 'Well-being',
        },
        {
            id: '5',
            text: 'Diversity & Inclusion',
        },
    ];


    return (
        <div className="p-20 space-y-10">
            <div className="grid grid-cols-4 gap-4 w-full">
                <img src={`/assets/PNG/donate-mock-image.webp`} className="col-span-2 row-span-3 object-cover w-full h-full"/>
                <div className="col-span-2 row-span-2 h-full w-full bg-important-blue flex flex-col items-center justify-center p-10 text-center">
                    <h1 className="font-bold text-2xl">Our partners products and services promote a positive impact on the environment and society</h1>
                    <p>Take a part and reduce your impact on the plant</p>
                </div>
                <img src={`/assets/PNG/blue-monday-mock.jpeg`} className="object-cover w-full h-full"/>
                <img src={`/assets/PNG/gift-card-mock.jpeg`} className="object-cover w-full h-full"/>
            </div>

            <div className="flex space-x-6">
                {categories.map(category => <GetButton key={category.id} onClick={() => setSelectedCategory(category.id)}
                                                       selected={selectedCategory === category.id}
                >{category.text}</GetButton>)}
            </div>
        </div>
    )
}