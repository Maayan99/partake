import getData from "../../../public/get-data";
import SmallGetCard from "@components/components/cards/small-get-card/small-get-card";
import {useState} from "react";
import GetButton from "@components/components/common/get-button/get-button";
import GetCollection from "@components/components/get-collection/get-collection";
import Head from "next/head";
import LargeGetCard from "@components/components/cards/large-get-card/large-get-card";

export default function Get() {
    const categories = [
        {
            id: '1',
            text: 'Social',
        },
        {
            id: '2',
            text: 'Sustainability',
            longBoldText: 'Make a difference for the environment',
            longText: 'Support Eco-friendly product and reduce your impact on the plant.',
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

    let filtered = getData;
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);


    return (
        <>
            <Head>
                <title></title>
            </Head>
            <div className="px-20 space-y-10">

                <div className="space-y-7">
                    <h1 className="font-bold">Get your rewards with the bonus of:</h1>
                    <div className="flex space-x-5">
                        {categories.map(category => <GetButton key={category.id}
                                                               onClick={() => setSelectedCategory(category)}
                                                               selected={selectedCategory.id === category.id}
                        >{category.text}</GetButton>)}
                    </div>
                </div>

                <div className="space-y-3 w-1/3">
                    <h1 className="font-bold">{selectedCategory.longBoldText}</h1>
                    <h1>{selectedCategory.longText}</h1>
                </div>

                <GetCollection collection={getData[0]}/>


                <div className="flex space-x-4">
                <LargeGetCard get={getData[1]}/>
                <LargeGetCard get={getData[2]}/>
                <LargeGetCard get={getData[3]}/>
                </div>
            </div>
        </>
    )
}