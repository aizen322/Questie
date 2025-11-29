import AddQuest from "../addQuest"

export default function MainLayout(){

    return(
        <div className="col-span-3 border-2">
            <div className="flex justify-between">
                <h1 className="text-3xl">Active Quests</h1>
                <button>Add Quest</button>
            </div>
            <AddQuest/>
        </div>
    )
}