export default function UserStats(){
    const questCompleted = 16;
    const dailyStreak = 7;
    const goldEarned = 5326;

    return(
        <div className="flex justify-between mt-6 text-sky-300 gap-2">
            <div>
                <h1 className="text-sm text-sky-400">Quest Completed</h1>
                <h2 className="font-bold text-2xl pl-2">{questCompleted}</h2>
            </div>
            <div>
                <h1 className="text-sm text-sky-400">Daily Streak</h1>
                <h2 className="font-bold text-2xl pl-2">{dailyStreak}</h2>
            </div>
            <div>
                <h1 className="text-sm text-sky-400">Gold Earned</h1>
                <h2 className="font-bold text-2xl pl-2">{goldEarned.toLocaleString()}</h2>
            </div>
        </div>
    )
}