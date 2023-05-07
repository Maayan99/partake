import AddIcon from "@mui/icons-material/Add";

export default function FilterBar({search, setSearch, filterersArray}) {
    const filteringValues = filterersArray.map(filterer => filterer.name);


    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="flex ml-36 h-24 items-center space-x-8 mb-10 ">
            <div className="flex h-10 focus-within:shadow border-r border-1 border-gray-500">
                <input placeholder="Search" className="w-72 pl-1 border border-1 border-gray-500 bg-light-gray
                rounded-none border-r-0 focus:outline-none" onChange={handleSearchChange} value={search}/>
                {filterersArray.map(filterer =>
                    <select key={filterer.id} onChange={filterer.handleFunction} value={filterer.value}
                            className="w-52 border border-1 border-gray-500 bg-light-gray
                rounded-none border-r-0 focus:outline-none">
                        <option value="">{filterer.placeholder}</option>
                        {filterer.options.map(option =>
                        <option key={option.id} value={option.value}>
                            {option.name}
                        </option>)}

                    </select>)}
            </div>
            <a href="/make">
                <div className="w-24 h-24 border border-4 border-black rounded-full
                transform-all duration-150 hover:scale-110 flex justify-center items-center">
                    <AddIcon/>
                </div>
            </a>
        </div>
    );
}