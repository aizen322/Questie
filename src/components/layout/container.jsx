export default function Container({children}){
    return(
        <main className="grid grid-cols-4 h-screen gap-4">
            {children}
        </main>
    )
}