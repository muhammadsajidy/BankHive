import { useState } from "react";

export default function BankInfo() { 
    const [bankName, setBankName] = useState('');
    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);
    const [bankDetails, setBankDetails] = useState([]);
    let [pageNo, setPageNo] = useState(1);
    let [start, setStart] = useState(0);
    
    const handleBankDetails = () => {
        setLoading(true);
        if (!bankName) {
            alert("Please enter a bank name");
            setLoading(false);
            return;
        }
        fetch(`http://127.0.0.1:8000/bank/${bankName}?start=${start}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setBankDetails(data);
            setLoading(false);
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
        fetch(`http://127.0.0.1:8000/bank/${bankName}/${cityName}?start=${start}`, {
            method: 'GET',
            'Content-type': 'application/json'
        })
        .then(res => res.json())
        .then(data => {
            // setBankDetails(data);
            setLoading(false);
            console.log(data)
        })
    };

    const handleBranchCoordinates = (address) => {
        fetch(`http://127.0.0.1:8000/location/${address}`, {
            method: 'GET',
            'Content-type': 'application/json'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => console.error(e));
    };

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
                        role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mt-3 text-lg">Fetching Bank Details</p>
                    </div>
                ) : null}
                {!loading && bankDetails.length > 0 ? (
                <div className="flex gap-1 text-lg">
                    <button 
                    className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={() => {
                        pageNo > 1 ? setPageNo(--pageNo) : null
                        setStart(start-=10)
                        handleBankDetails()
                    }}
                    disabled={pageNo===1}
                    >{`<<<`}</button>
                    <p className="border-2 border-black px-2 py-1 rounded-md">{pageNo}</p>
                    <button 
                    className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={() => {
                        pageNo < 100 ? setPageNo(++pageNo) : null
                        setStart(start+=10)
                        handleBankDetails()
                    }}
                    >{`>>>`}</button>
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
                        <div className="w-[100%] flex justify-center items-center">
                            <button 
                            className="w-36 px-2 py-2 bg-black text-white rounded-lg"
                            onClick={() => handleBranchCoordinates(bank.ADDRESS)}
                            >View In Map</button>
                        </div>
                    </div>
                ))}
                {!loading && bankDetails.length > 0 ? (
                <div className="flex gap-1 text-lg">
                    <button 
                    className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={() => {
                        pageNo > 1 ? setPageNo(--pageNo) : null
                        setStart(start-=10)
                        handleBankDetails()
                    }}
                    disabled={pageNo===1}
                    >{`<<<`}</button>
                    <p className="border-2 border-black px-2 py-1 rounded-md">{pageNo}</p>
                    <button 
                    className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={() => {
                        pageNo < 100 ? setPageNo(++pageNo) : null
                        setStart(start+=10)
                        handleBankDetails()
                    }}
                    >{`>>>`}</button>
                </div>
                ) : null}
            </div>
        </div>
    );
};