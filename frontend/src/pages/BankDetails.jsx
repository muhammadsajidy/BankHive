import BankInfo from "../components/BankInfo";
import MapViewer from "../components/MapViewer";
import CoordinateContextProvider from "../context/CoordinateContextProvider"

export default function BankDetails() {
    return (
        <CoordinateContextProvider>
            <div className="w-screen sm:h-auto lg:h-screen flex sm:flex-col lg:flex-row justify-center gap-3 items-center pt-[70px] pb-[30px]">
                <BankInfo />
                <MapViewer />
            </div>
        </CoordinateContextProvider>
    );
};