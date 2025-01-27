

export default function NavBar() {
    return (
        <nav className="h-14 w-[100%] fixed top-0 border-b-2 border-b-[#424874] bg-[#DCD6F7]">
                <div className="w-[100%] flex justify-center my-3 font-raleway font-semibold sm:text-lg md:text-lg text-[#424874]">
                <ul className="flex sm:gap-4 lg:gap-8">
                    <li><a href="/" className={window.location.pathname==="/" ? "border-b-2 border-[#424874]" : null}>Home</a></li>
                    <li><a href="/about" className={window.location.pathname==="/about" ? "border-b-2 border-[#424874]" : null}>About</a></li>
                    <li><a href="/search" className={window.location.pathname==="/search" ? "border-b-2 border-[#424874]" : null}>Search</a></li>
                    <li><a href="/apidocs" className={window.location.pathname==="/apidocs" ? "border-b-2 border-[#424874]" : null}>API</a></li>
                </ul>
            </div>
        </nav>
    );
};