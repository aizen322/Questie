import UserProfile from "../userprofile"
import UserStats from "../userStats"

export default function SideBar(){
    return(
        <div className="border-y-5 p-6 overflow-hidden border-sky-300 bg-sky-800/15 shadow-lg shadow-cyan-500/50
        inset-shadow-sm inset-shadow-cyan-500/80">
            <UserProfile/>
            <UserStats/>
        </div>
    )
}