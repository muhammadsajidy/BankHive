import { useState } from "react";

export default function BankInfo() { 
    const [bankName, setBankName] = useState('');
    const [city, setCity] = useState('');

    return (
        <div className="sm:w-[95%] lg:w-[50%] h-[85vh] flex flex-col items-center font-montserrat">
            <div className="bg-white h-10 w-[98%] border-[1.5px] border-black flex items-center py-2">
                <input 
                type="text" 
                className="bg-none border-[1px] border-black outline-none h-8 px-1 py-1 ml-1 text-sm w-[35%]" 
                placeholder="Bank Name"
                onChange={(e) => setBankName(e.target.value)}
                />
                <input 
                type="text" 
                className="bg-none border-[1px] border-black outline-none h-8 px-1 py-1 ml-1 text-sm w-[35%]" 
                placeholder="City (optional)"
                onChange={(e) => setCity(e.target.value)}
                />
                <button className="sm:px-1 lg:px-2 py-1 bg-black text-white ml-[2px] mr-[2px] w-[13%] sm:text-sm lg:text-md">Filter</button>
                <button className="sm:px-1 lg:px-2 py-1 bg-black text-white mr-[2px] w-[13%] sm:text-sm lg:text-md">Search</button>
            </div>
            <div className="bg-white mt-2 w-[98%] h-[90%] border-[1.5px] border-black">

            </div>
        </div>
    );
};