export default function Quest({questTitle,questType,questPriority}){


    const priorityColors = {
    "Main Quest": "border-2 border-red-500/60",
    "Side Quest": "border-2 border-yellow-500/60",
    "Mini Quest": "border-2 border-gray-500/60",
    "Daily Quest": "border-2 border-green-500/60",
    };

    const typeColors = {
        "Personal": "border-2 border-blue-500/60",
        "Work": "border-2 border-cyan-500/60",
        "Adventure": "border-2 border-sky-500/60",
    };

    const priorityColor = priorityColors[questPriority];
    const typeColor = typeColors[questType];
    console.log(priorityColor);
    return(
        <div className="border-1 border-sky-200
        shadow-sm shadow-cyan-200/80
        inset-shadow-sm inset-shadow-cyan-200/80 
        h-25 p-2 px-4 rounded- flex flex-col gap-2 justify-center text-sky-200 text-shadow-md/40 text-shadow-sky-200
        ">
            
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    className="h-5 w-5 rounded-md border-2 border-text appearance-none
                        checked:bg-sky-500/50 checked:border-sky-500/50
                        checked:after:content-['✔']
                        checked:after:text-white
                        checked:after:font-bold
                        checked:after:text-sm
                        checked:after:flex checked:after:items-center checked:after:justify-center
                    "
                    />

                <h1 className="text-lg text-shadow-md/40 text-shadow-sky-200">{questTitle}</h1>
            </div>
            <div className="flex gap-6 pl-10">
                <h2 className={`text-[12px] text-white px-3 rounded-full font-light ${priorityColor}`}>     
                    {questPriority}   
                </h2>
                <h2 className={`text-[12px] text-white px-3 rounded-full font-light ${typeColor}`}>
                {questType}
                </h2>
            </div>
        </div>
    )
}