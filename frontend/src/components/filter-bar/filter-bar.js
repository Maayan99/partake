import Icon from "@components/components/common/icon/icon";
import Dropdown from "@components/components/common/custom-dropdown/custom-dropdown";

export default function FilterBar({search, setSearch, filterersArray}) {
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="flex ml-36 h-24 items-center space-x-8 mb-10 ">
            <div className="flex h-14 focus-within:shadow border-r border-1 border-gray-500">
                <input placeholder="Search" className="italic w-96 font-thin px-4 py-2 text-xl
                 border border-1 border-gray-500 bg-light-gray
                rounded-none border-r-0 focus:outline-none" onChange={handleSearchChange} value={search}/>
                {filterersArray.map(filterer => <Dropdown className="min-w-[280px] border-r-0 " key={filterer.id} selectOptions={filterer}/>)}

            </div>
            <a href="/make">
                <div className="w-24 h-24 border border-2 border-black rounded-full
                transform-all duration-150 hover:scale-110 flex justify-center items-center">
                    <Icon name="plus" className="h-8 w-8"/>
                </div>
            </a>
        </div>
    );
}