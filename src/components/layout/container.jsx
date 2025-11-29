export default function Container({children}){
    return(
        <main className="grid grid-cols-4 gap-4 h-full ">
            {children}
        </main>
    )
}