import Navigation from "./Navigation"

function Header(){
    return(
        <header className="border-b p-3 flex justify-between items-center text-white bg-black">
            <span className="font-bold">
            Hello! Please, look around.
            </span> 
            
            <Navigation />
        </header>
    )
}

export default Header