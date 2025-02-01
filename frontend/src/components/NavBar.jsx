

export default function NavBar() {
    return (
        <nav className="h-14 w-[100%] fixed top-0 flex justify-center items-center">
            <div className="sm:w-[100%] lg:w-[65%] h-[100%] font-raleway font-semibold sm:text-lg md:text-lg text-white flex justify-center items-center bg-gradient-to-r from-left-dark-blue to-right-dark-blue">
                <ul className="flex sm:gap-4 lg:gap-8 ">
                    <li><a href="/" className={window.location.pathname==="/" ? "border-b-2 border-white" : null}>Home</a></li>
                    <li><a href="/search" className={window.location.pathname==="/search" ? "border-b-2 border-white" : null}>Search</a></li>
                    <li><a href="/about" className={window.location.pathname==="/about" ? "border-b-2 border-white" : null}>About</a></li>
                </ul>
            </div>
        </nav>
    );
};