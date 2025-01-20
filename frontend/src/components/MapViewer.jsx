import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function MapViewer() {
    return (
        <MapContainer center={[24.179411, 83.829889]} zoom={5} className="sm:w-[90%] lg:w-[47%] sm:h-80 lg:h-[85vh] sm:mt-2 lg:mt-0 border-[1.5px] border-black">
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />
        </MapContainer> 
    );
};