import { useState } from "react";

export default function BankInfo() { 
    const [bankName, setBankName] = useState('');
    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);
    const [bankDetails, setBankDetails] = useState([]);

    const handleBankDetails = () => {
        setLoading(true);
        if (!bankName) {
            alert("Please enter a bank name");
            setLoading(false);
            return;
        }
        fetch(`http://127.0.0.1:8000/bank/${bankName}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setBankDetails([...data]);
            setLoading(false);
            console.log(data);
        })
        .catch(e => console.error(e))
    };

    const handleBankDetailsCity = () => {
        setLoading(true);
        if (!bankName || !cityName) {
            alert("Please enter a bank name");
            setLoading(false);
            return;
        }
        fetch(`http://127.0.0.1:8000/bank/${bankName}/${cityName}`, {
            method: 'GET',
            'Content-type': 'application/json'
        })
        .then(res => res.json())
        .then(data => {
            setBankDetails([...data]);
            setLoading(false);
            console.log(data);
        })
    }

    return (
        <div className="sm:w-[90%] lg:w-[47%] h-[85vh] flex flex-col items-center font-montserrat">
            <div className="bg-white sm:h-fit lg:h-12 w-[100%] border-[1.5px] border-black flex flex-row justify-center items-center py-2">
                <div className="sm:w-[80%] lg:w-[75%] flex sm:flex-wrap lg:flex-row lg:justify-between gap-2">
                    <input 
                    type="text" 
                    className="bg-none border-[1px] border-black outline-none h-8 px-1 py-1 ml-1 text-sm w-[95%] lg:w-[48%]" 
                    placeholder="Bank Name"
                    onChange={(e) => setBankName(e.target.value)}
                    />
                    <input 
                    type="text" 
                    className="bg-none border-[1px] border-black outline-none h-8 px-1 py-1 ml-1 text-sm w-[95%] lg:w-[48%]" 
                    placeholder="City (optional)"
                    onChange={(e) => setCityName(e.target.value)}
                    />
                </div>
                <div className="sm:w-[20%] lg:w-[27%] flex flex-wrap gap-2 justify-center">
                    <button 
                    className="sm:px-1 lg:px-2 h-8 bg-black text-white mr-[2px] sm:text-sm lg:text-md rounded-md sm:w-20 lg:w-auto"
                    onClick={handleBankDetails}
                    disabled={loading}
                    >Search</button>
                    <button 
                    className="sm:px-1 lg:px-2 h-8 bg-black text-white mr-[2px] sm:text-sm lg:text-md rounded-md sm:w-20 lg:w-auto"
                    onClick={handleBankDetailsCity}
                    disabled={loading}
                    >Filter</button>
                </div>
            </div>
            <div className="bg-white mt-2 w-full h-full border-[1.5px] border-black flex flex-col gap-3 justify-start items-center overflow-y-auto overflow-x-hidden py-2">
                {loading ? (
                    <div className="my-auto flex flex-col items-center">
                        <div
                            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mt-3 text-lg">Fetching Bank Details</p>
                    </div>
                ) : null}

                {!loading && bankDetails.map((bank) => (
                    <div key={bank._id}className="w-[95%] px-4 py-3 border-[1px] border-gray-500 text-sm font-montserrat rounded-md">
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
                ))}
            </div>
        </div>
    );
};