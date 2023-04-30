const GalleryItem = ({item}) => {
    const {user, text, image} = item;

    return (
        <div className="p-4 flex flex-col min-h-62 space-y-2 h-min">
            {item.user && <div className="flex items-center space-x-3">
                <img src={`/assets/PNG/${user.profileImage}`} className="w-12 h-12 rounded-full object-cover"/>
                <span>{user.name}</span>
            </div>}
            <div className="w-full h-full bg-slate-200 mt-3">
                {image &&
                    <img src={`/assets/PNG/${image}`} className="w-full"/>}
            </div>
            {text}

        </div>
    )
};

export default function Gallery({items, taskNum, task}) {
    const firstColumn = [];
    const secondColumn = [];
    const thirdColumn = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        switch (i % 3) {
            case 0:
                firstColumn.push(item);
                break;
            case 1:
                secondColumn.push(item);
                break;
            case 2:
                thirdColumn.push(item);
                break;
        }
    }

    return (
        <div className="bg-slate-200 col-span-3 rounded-lg p-4">
            <div className="flex flex-col items-center">
                <h1 className="font-extrabold text-3xl">Gallery</h1>
                <p className="font-bold">Task {taskNum}: {task}</p>
            </div>
            <section className="flex flex-col items-center col-span-3">
                <div className="grid grid-cols-3 gap-6 mt-4 w-full">
                    <div className="flex flex-col">
                        {firstColumn.map(item => <GalleryItem item={item} key={item.id}/>)}
                    </div>
                    <div className="flex flex-col">
                        {secondColumn.map(item => <GalleryItem item={item} key={item.id}/>)}
                    </div>
                    <div className="flex flex-col">
                        {thirdColumn.map(item => <GalleryItem item={item} key={item.id}/>)}
                    </div>
                </div>
            </section>
        </div>
    )
}