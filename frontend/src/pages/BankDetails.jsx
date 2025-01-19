import BankInfo from "../components/BankInfo";
import MapViewer from "../components/MapViewer";

export default function BankDetails() {
    return (
        <div className="w-screen h-screen flex sm:flex-col lg:flex-row items-center pt-[70px] pb-[30px]">
            <BankInfo />
            <MapViewer />
        </div>
    );
};