export default function ExpandedProgressBar({numberOfTasks, numberOfFulfilledTasks, viewedTask}) {
    const blockArray = [];

    for (let i = 0; i < numberOfTasks; i++) {
        if (viewedTask === i) {
            blockArray.push(<div className="h-full w-full bg-green-400" key={i}/>)
        } else if (i < numberOfFulfilledTasks) {
            blockArray.push(<div className="h-full w-full bg-blue" key={i}/>)
        } else {
            blockArray.push(<div className="h-full w-full bg-important-blue" key={i}/>)
        }
    }

    return (
        <>
            <h1 className="text-lg font-bold">Progress</h1>
            <div className="h-2 w-full flex space-x-2">
                {blockArray}
            </div>
            <p className="text-xs">{numberOfFulfilledTasks}/{numberOfTasks} tasks</p>
        </>
    )
}