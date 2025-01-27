import { useState } from "react"


export default function APIDocs() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-transparent text-[#424874] font-raleway">
            <div className="my-16 flex flex-col items-center sm:w-[93%] lg:w-[90%] mx-auto">
                <h1 className="my-3 font-bold sm:text-3xl lg:text-4xl w-[100%] sm:text-center lg:text-left">API Documentation</h1>
                <div className="flex flex-col sm:w-[85%] lg:w-[100%] mx-auto my-3">
                    <h2 className="font-semibold sm:text-lg lg:text-2xl w-[100%] text-left ">Description</h2>
                    <p className="my-2 sm:text-base lg:text-lg">BankHive API allows you to:</p>
                    <ul className="list-disc list-inside">
                        <li>Fetch details of banks such as Yes Bank & Canara Bank and their branches all over India.</li>
                        <li>Fetch details of the branches of these banks in specific cities</li>
                    </ul>
                </div>
                <div className="flex flex-col sm:w-[85%] lg:w-[100%] mx-auto my-3">
                    <h2 className="font-semibold sm:text-lg lg:text-2xl w-[100%] text-left ">Base URL</h2>
                    <p className="my-2 sm:text-base lg:text-lg font-normal bg-[#c3bce0] w-fit px-2 py-1 rounded-md">https://bankhive.github.io</p>
                </div>
                <div className="flex flex-col flex-wrap sm:w-[85%] lg:w-[100%] mx-auto my-3">
                    <h2 className="font-semibold sm:text-lg lg:text-2xl w-[100%] text-left ">Endpoints</h2>
                    <div className="my-5 bg-[#c3bce0] py-1 px-2 flex items-center">
                        <p className="bg-[#424874] text-white w-fit px-2 py-1 rounded font-semibold">GET</p>
                        <p className="w-fit px-2 py-1">/bank/&#123;bank_name&#125;</p>
                        <button 
                        className="ml-auto w-6 h-6 bg-[#424874] text-white font-montserrat rounded-md"
                        onClick={() => {setOpen(!open);console.log(open)}}
                        >V
                        </button>
                    </div>
                        {open ? (
                            <div className="bg-[#c3bce0] py-1 px-2 flex items-center">
                                <p>Content</p>
                            </div>
                        ) : null}
                </div>
                
            </div>
        </div>
    )
}