import QuestContainer from "../questContainer"

export default function MainLayout(){

    return(
        <div className="col-span-3 border-y-5 p-6 overflow-hidden flex gap-4 border-sky-300 bg-sky-800/15 justify-between
        shadow-lg shadow-cyan-500/50 inset-shadow-sm inset-shadow-cyan-500/80">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <h1 className="text-3xl text-sky-200 text-shadow-md/40 text-shadow-sky-200">Active Quests</h1>
                    <button className="border-2 rounded-full px-4 py-2 border-sky-400 text-sky-400 cursor-pointer flex items-center
                    hover:bg-sky-600/50 hover:text-sky-200 hover:shadow-lg shadow-cyan-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> </svg>
                        Add Quest
                    </button>
                </div>
                <QuestContainer/>
            </div>

        </div>
    )
}