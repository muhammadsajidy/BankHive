


export default function About() {
    return (
        <div className="w-screen h-screen font-raleway overflow-x-hidden bg-transparent">
            <div className="mx-auto sm:w-[90%] lg:w-[75%] px-4 py-2 rounded-md mb-8 sm:mt-[90px] lg:mt-20 flex flex-col items-center text-white sm:bg-gradient-to-r sm:from-left-dark-blue sm:to-right-dark-blue lg:bg-none">
                <h1 className="font-semibold sm:text-2xl lg:text-4xl">About BankHive</h1>
                <p className="mt-3 sm:text-md lg:text-lg lg:w-[80%]">Welcome to BankHive, your one-stop solution for accessing detailed information about banks across India. Whether you're looking for branch locations, IFSC codes, contact numbers, or other essential banking details, BankHive makes it simple and efficient to find what you need.</p>
                <p className="mt-3 sm:text-md lg:text-lg lg:w-[80%]">Our platform supports a wide range of Indian banks, including trusted names like Canara Bank, State Bank of India, and many more. With a user-friendly interface and powerful tools, BankHive ensures you can quickly access accurate and up-to-date information to meet your financial needs.</p>
                <h3 className="mt-3 sm:text-md lg:text-lg lg:w-[80%] text-left w-[100%]">What we offer:</h3>
                <ul className="mt-3 text-md list-disc list-inside">
                    <li className="mb-2"><strong>Branch Details:</strong> Find the exact location and address of any bank branch.</li>
                    <li className="mb-2"><strong>IFSC Codes:</strong> Access the IFSC codes required for secure online transactions.</li>
                    <li className="mb-2"><strong>Contact Information:</strong> Get phone numbers and other details to reach out to specific bank branches.</li>
                    <li className="mb-2"><strong>Interactive Maps:</strong> Visualize branch locations on an interactive map with markers for easy navigation.</li>
                </ul>
                <p className="mt-3 sm:text-md lg:text-lg lg:w-[80%]">At BankHive, we strive to provide a seamless experience, empowering individuals and businesses to make informed financial decisions. Whether you're setting up an account, initiating a transfer, or simply looking for banking assistance, BankHive is here to help.</p>
                <h3 className="mt-3 sm:text-md lg:text-xl lg:w-[80%] text-left w-[100%]">Why Choose Us?</h3>
                <ul className="mt-3 text-md list-disc list-inside sm:ml-0 lg:ml-48 w-[100%]">
                    <li className="mb-2">Comprehensive database covering multiple banks.</li>
                    <li className="mb-2">Accurate, reliable, and regularly updated information.</li>
                    <li className="mb-2">Easy-to-use platform tailored for quick searches.</li>
                </ul>
                <p className="mt-3 sm:text-md lg:text-lg lg:w-[80%]">Explore BankHive today and simplify your banking experience like never before!</p>
                <p className="mt-3 sm:text-md lg:text-lg lg:w-[80%] text-left w-[100%]">Developed by <strong><a href="https://github.com/muhammadsajidy" target="blank">Muhammad Sajid</a></strong></p>
                <p className="mt-3 sm:text-md lg:text-lg lg:w-[80%]">Credits: <strong><a href="https://ifsc.razorpay.com/" target="blank">RazorPay </a></strong>(for dataset) | <a href="https://github.com/prodev717" target="blank"><strong>Ganesh M </strong></a>(Project guidance)</p>
            </div>
        </div>
    )
}