export default function UserProfile(){
    const userClass = "Assassin";
    const userName = "Anorax";
    const userLevel = 1;
    const currentXp = 67;
    return (
        <div className="flex flex-col gap-4 text-sky-300">
            <div className="flex items-center gap-4">
                <div className="border-1 h-25 w-25 rounded-md shrink-0"></div>
                <div>
                    <h1 className="text-lg">Level : <span className="text-sky-400 text-shadow-md/40 text-shadow-sky-200">{userLevel}</span></h1>
                    <h1 className="text-3xl font-bold text-shadow-md/40 text-shadow-sky-200">{userName}</h1>
                    <h1 className="text-sm">Class : <span className="text-sky-400 text-shadow-md/40 text-shadow-sky-200">{userClass}</span></h1>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold text-sky-400">XP</h1>
                    <h1>{currentXp} / 100</h1>
                </div>
                <div className="relative h-5 w-full border-1 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-700/80 rounded-full"></div>
                    <div className={`h-5 bg-green-500 rounded-full absolute`}
                        style={{ width: `${currentXp}%` }}>
                    </div>
                </div>
            </div>

        </div>
    )
}