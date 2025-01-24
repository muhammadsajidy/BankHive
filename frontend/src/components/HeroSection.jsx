import { useState } from "react"
import arrow from '../assets/arrowicon.png'

export default function HeroSection() {
    const [bankName, setBankName] = useState('');
    const [bankList, setBankList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleBankDetails = () => {
        setLoading(true);
        if (!bankName) {
            alert("Please enter a bank name");
            setLoading(false);
            return;
        }
        fetch(`http://127.0.0.1:8000/bank/${bankName}?limit=5`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data[0].length === 0) setError('No results found. Make sure you spelled it right');
            setBankList(data[0]);
            setLoading(false);
        })
        .catch(() => setError('Unable to fetch bank details. Please check if you spelled it correctly'));
    };

    return (
        <div className="h-screen w-screen font-raleway flex sm:flex-col lg:flex-row sm:justify-center sm:items-center text-[#424874]">
            <div className="sm:w-[85%] lg:w-[40%] sm:mt-[90px] lg:mt-0 h-screen flex lg:justify-center items-center">
                <div className="w-[100%] px-5">
                    <h1 className="sm:text-5xl lg:text-6xl font-bold">Welcome to BankHive</h1>
                    <p className="my-5 sm:text-md lg:text-lg">Discover detailed information about 50+ Indian banks, including industry leaders like Canara Bank, SBI, and more. Access branch details, addresses, and locations effortlessly—all in one place!</p>
                    <div className="w-[100%] flex flex-col items-center">
                        <p className="my-5 sm:text-md lg:text-lg">Enter a bank's name here to explore its details and branches.</p>
                        <img src={arrow} alt="" className="h-8 w-8 lg:-rotate-90 sm:motion-translate-y-loop-25 lg:motion-translate-x-loop-50"/>
                    </div>
                </div>
            </div>
            <div className="sm:w-[85%] lg:w-[55%] h-screen flex flex-col lg:justify-center items-center sm:pt-10">
                <div className="sm:w-[90%] h-14 lg:w-[70%] bg-white border-black border-[1.2px] rounded-md flex justify-between shadow-[3px_5px_0px_#000000]">
                    <input 
                    id='bank-name'
                    className="w-[80%] outline-none bg-transparent sm:text-sm px-2 py-2" 
                    type="text" 
                    placeholder="ex: State Bank of India"
                    onChange={(e) => setBankName(e.target.value)}
                    />
                    <button
                    className="hover:bg-black hover:text-white px-2 py-1 rounded"
                    onClick={handleBankDetails}
                    disabled={loading}
                    >Search</button>
                </div>
                {loading && !error &&
                <>
                    <div
                        className="mt-10 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                    <p className="mt-3">Fetching Bank Details</p>
                </>}
                {error ? (
                    <div className="mt-10 flex flex-col items-center">
                        <p>{error}</p>
                        <button 
                        className="mt-3 px-2 py-1 bg-black text-white"
                        onClick={() => {
                            setError('');
                            setBankName('');
                            document.getElementById('bank-name').value = '';
                            setBankList([]);
                            setLoading(false);
                        }}
                        >Clear</button>
                    </div>
                ) : null}
                {(bankList.length !== 0 && !loading) && !error &&
                (<div className="mt-10 mb-10 sm:w-[90%] lg:w-[70%] max-h-60 overflow-y-auto scrollbar-hide bg-white border-[1.2px] border-black px-2 rounded-md shadow-[3px_5px_0px_#000000]">
                    {bankList.map((bank) => {
                        return (
                            <div key={bank._id} className="w-[100%] px-2 py-3 my-2 border-[1px] border-gray-500 text-sm font-montserrat rounded-md">
                                <p><strong>BANK: </strong>{bank.BANK}</p>
                                <p><strong>BRANCH: </strong>{bank.BRANCH}</p>
                                <p><strong>ADDRESS: </strong>{bank.ADDRESS}</p>
                                <p><strong>DISTRICT: </strong>{bank.DISTRICT}</p>
                                <p><strong>STATE: </strong>{bank.STATE}</p>
                                <p><strong>ISO 3166: </strong>{bank.ISO3166}</p>
                                <p><strong>IFSC: </strong>{bank.IFSC}</p>
                                <p><strong>NEFT: </strong>{bank.NEFT ? "Yes" : "No"}</p>
                                <p><strong>IMPS: </strong>{bank.IMPS ? "Yes" : "No"}</p>
                            </div>
                        )
                    })}
                </div>)}
            </div>
        </div>
    )
}