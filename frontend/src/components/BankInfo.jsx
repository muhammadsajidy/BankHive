import { useState, useContext } from "react";
import CoordinateContext from "../context/CoordinateContext";

export default function BankInfo() { 
    const [bankName, setBankName] = useState('');
    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [bankDetails, setBankDetails] = useState([]);
    const [bankCount, setBankCount] = useState(0);
    const [pageNo, setPageNo] = useState(1);
    const [start, setStart] = useState(0);
    const {setCoordinate} = useContext(CoordinateContext);
    const {setAddress} = useContext(CoordinateContext);

    function handleBankDetails() {
        setLoading(true);
        setError('');
        
        const url = cityName ? 
        `http://127.0.0.1:8000/bank/${bankName}/${cityName}?start=${start}` :
        `http://127.0.0.1:8000/bank/${bankName}?start=${start}`;
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data[0].length === 0) setError('No results found. Make sure you spelled it right');
            setBankDetails(data[0]);
            setBankCount(data[1]);
            setLoading(false);

        })
        .catch(() => {
            setError('Failed to fetch bank details. Please try again.');
            setLoading(false);
        })
    };

    function handleBranchCoordinates(address) {
        fetch(`http://127.0.0.1:8000/location/${encodeURIComponent(address)}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            signal: AbortSignal.timeout(7000)
        })
        .then(res => res.json())
        .then(data => {
            if (!isNaN(data.lat) && !isNaN(data.lng)) setCoordinate(data);
            else setCoordinate({"lat": 0, "lng": 0})
        })
        .catch(e => console.error(e));
    };

    function handleReset() {
        setLoading(false);
        setError('');
        setBankName('');
        document.getElementById('bank-name').value = '';
        document.getElementById('city-name').value = '';
        setCityName('');
        setBankDetails([]);
        setBankCount(0);
        setPageNo(1);
        setStart(0);
        setCoordinate({"lat": 0, "lng": 0});
    };


    return (
        <div className="sm:w-[90%] lg:w-[47%] h-[85vh] flex flex-col items-center font-montserrat">
            <div className="bg-white sm:h-fit lg:h-12 w-[100%] border-[1.5px] border-black flex flex-row justify-center items-center py-2 px-1">
                <div className="sm:w-[80%] lg:w-[80%] flex sm:flex-wrap lg:flex-row lg:justify-between gap-1">
                    <div className="w-[95%] lg:w-[48%] flex">
                        <input 
                        id="bank-name"
                        type="text" 
                        className="bg-none border-[1px] border-black outline-none h-8 px-1 py-1 ml-1 text-sm rounded-md sm:w-[90%]" 
                        placeholder="Bank Name"
                        onChange={(e) => setBankName(e.target.value)}
                        />
                        <button
                        className="ml-1 h-8 bg-black text-white px-2 rounded-md"
                        onClick={() => {document.getElementById('bank-name').value = '';setBankName('')}}
                        disabled={!bankName}
                        >X</button>
                    </div>
                    <div className="w-[95%] lg:w-[48%] flex">
                        <input 
                        id="city-name"
                        type="text" 
                        className="bg-none border-[1px] border-black outline-none h-8 px-1 py-1 ml-1 text-sm rounded-md sm:w-[90%]" 
                        placeholder="City (optional)"
                        onChange={(e) => {setCityName(e.target.value);}}
                        />
                        <button
                        className="ml-1 h-8 bg-black text-white px-2 rounded-md"
                        onClick={() => {document.getElementById('city-name').value = '';setCityName('')}}
                        disabled={!cityName}
                        >X</button>
                    </div>
                </div>
                <div className="sm:w-[20%] lg:w-[20%] flex flex-wrap gap-1 justify-center">
                    <button 
                    className="sm:px-1 lg:px-2 h-8 bg-black text-white mr-[2px] sm:text-sm lg:text-md rounded-md sm:w-20 lg:w-auto"
                    onClick={handleBankDetails}
                    disabled={loading || !bankName}
                    >Search</button> 
                    <button 
                    className="sm:px-1 lg:px-2 h-8 bg-black text-white mr-[2px] sm:text-sm lg:text-md rounded-md sm:w-20 lg:w-auto"
                    onClick={handleReset}
                    >R</button>
                </div>
            </div>
            <div className="bg-white mt-2 w-full h-full border-[1.5px] border-black flex flex-col gap-3 justify-start items-center overflow-y-auto overflow-x-hidden py-2">
                {loading ? 
                (<div className="my-auto flex flex-col items-center">
                    <div
                        className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
                        role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p className="mt-3 text-lg">Fetching Bank Details</p>
                </div>) : 
                (error ? 
                    (<p className="my-auto text-red-500">{error}</p>) : bankDetails.length === 0 ? 
                    (<p className="my-auto">Your bank details will be displayed here</p>) : 
                    (!error && 
                    <div className="mx-auto text-sm px-2 py-1">
                        <p>{start + 1} to {start + 50 > bankCount ? bankCount : start + 50} of {bankCount} results</p>
                    </div>)
                )}
                
                {!loading && bankDetails && !error && bankDetails.map((bank) => 
                (<div key={bank._id}className="w-[95%] px-4 py-3 border-[1px] border-gray-500 text-sm font-montserrat rounded-md">
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
                        onClick={() => {
                            handleBranchCoordinates(bank.ADDRESS.replace(/[/#]/g, " "));
                            setAddress(bank.ADDRESS);
                        }}
                        >View In Map</button>
                    </div>
                </div>))}
                {!loading && bankDetails.length > 0 && 
                (<div className="flex gap-1 text-lg">
                    <button 
                    className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={() => {
                        if (pageNo > 1) setPageNo(pageNo-1)
                        setStart(start-50)
                        handleBankDetails();
                    }}
                    disabled={pageNo===1}
                    >{`<<<`}</button>
                    <p className="border-2 border-black px-2 py-1 rounded-md">{pageNo}</p>
                    <button 
                    className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={() => {
                        if (pageNo <= bankCount/50) setPageNo(pageNo+1) 
                        setStart(start+50)
                        handleBankDetails()
                    }}
                    disabled={pageNo==Math.ceil(bankCount/50)}
                    >{`>>>`}</button>
                </div>)}
                
            </div>
        </div>
    );
};