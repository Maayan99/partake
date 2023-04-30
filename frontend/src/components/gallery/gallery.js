const GalleryItem = ({message}) => {
    const {user, text, image} = message;

    return (
        <div className="p-4 flex flex-col min-h-62 space-y-2 h-min">
            {message.user && <div className="flex items-center space-x-3">
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

export default function Gallery({messages, taskNum, task}) {
    return (
        <div className="bg-slate-200 col-span-3 rounded-lg p-4">
            <div className="flex flex-col items-center">
                <h1 className="font-extrabold text-3xl">Gallery</h1>
                <p className="font-bold">Task {taskNum}: {task}</p>
            </div>
            <section className="flex flex-col items-center col-span-3">
                <div className="grid grid-cols-3 gap-6 mt-4 w-full">
                    {messages.map(message => <GalleryItem message={message} key={message.id}/>)}
                </div>
            </section>
        </div>
    )
}