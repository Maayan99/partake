import getData from "../../../public/get-data";
import SmallGetCard from "@components/components/cards/small-get-card/small-get-card";

export default function Get() {
    return (
        <div className="p-20">
            <div className="grid grid-cols-4 gap-4 w-full">
                <img src={`/assets/PNG/donate-mock-image.webp`} className="col-span-2 row-span-3 object-cover w-full h-full"/>
                <div className="col-span-2 row-span-2 h-full w-full bg-important-blue flex flex-col items-center justify-center p-10 text-center">
                    <h1 className="font-bold text-2xl">Our partners products and services promote a positive impact on the environment and society</h1>
                    <p>Take a part and reduce your impact on the plant</p>
                </div>
                <img src={`/assets/PNG/blue-monday-mock.jpeg`} className="object-cover w-full h-full"/>
                <img src={`/assets/PNG/gift-card-mock.jpeg`} className="object-cover w-full h-full"/>
            </div>
        </div>
    )
}