import { useState } from "react";

export default function NavBar() {
    return (
        <nav className="h-14 w-[100%] bg-transparent fixed top-0">
            <div className="w-[100%] flex justify-center py-6 font-raleway font-semibold sm:text-md md:text-lg">
                <ul className="flex sm:gap-4 lg:gap-8">
                    <li><a href="/" className={window.location.pathname==="/" ? "border-b-2 border-black" : null}>Home</a></li>
                    <li><a href="/search" className={window.location.pathname==="/search" ? "border-b-2 border-black" : null}>Search</a></li>
                    <li><a href="/about" className={window.location.pathname==="/about" ? "border-b-2 border-black" : null}>About</a></li>
                    <li><a href="/apidocs" className={window.location.pathname==="/apidocs" ? "border-b-2 border-black" : null}>API</a></li>
                </ul>
                {/* <div className='lg:hidden fixed left-7 top-6'>
                    <button className='' onClick={() => setIsOpen(!isOpen)} >
                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' className='w-8 h-8'>
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div> */}
            </div>
        </nav>
    );
};