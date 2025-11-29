import Quest from "./quest"

export default function QuestContainer(){

    const quests = [
        {id:1, title:"Slay a dragon", priority:"Main Quest", type: "Personal"},
        {id:2, title:"Kill 10 goblins", priority:"Side Quest", type: "Adventure"},
        {id:3, title:"Gather 5 herbs", priority:"Mini Quest", type: "Work"},
        {id:4, title:"Craft 10 items", priority:"Daily Quest", type: "Personal"},
    ];

    return(
        <div className="flex flex-col gap-4 pl-4 w-200">
            {quests.map(quest => (
                <Quest
                    key={quest.id}
                    questTitle={quest.title}
                    questType={quest.type}
                    questPriority={quest.priority}
                />
            ))}
        </div>
    )
}