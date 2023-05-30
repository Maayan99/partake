import SmallGetCard from "@components/components/cards/small-get-card/small-get-card";

export default function GetCollection({collection}) {
    const {items, logoImage, description, descriptionBold, id} = collection;

    return (
        <div className="grid grid-cols-10 grid-rows-5 gap-x-6 gap-y-4 ">
            <SmallGetCard get={items[0]} className="col-span-3 row-span-3"/>
            <SmallGetCard get={items[1]} className="col-span-3 row-span-3"/>
            <div className="col-span-4 row-span-5 bg-slate-50 px-16 py-8 space-y-4 items-center flex flex-col">
                <img src={`/assets/PNG/logos/${logoImage}`} className="h-32"/>
                <h1 className="font-bold text-xl">{descriptionBold}</h1>
                <h1 className="text-lg">{description}</h1>
                <a href={`get/collections/${id}`}>
                    <p className="mt-10 underline">See Collection</p>
                </a>
            </div>
            <SmallGetCard get={items[2]} className="col-span-3 row-span-2"/>
            <SmallGetCard get={items[3]} className="col-span-3 row-span-2"/>
        </div>
    )
}