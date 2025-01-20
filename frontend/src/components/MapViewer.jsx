import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function MapViewer() {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13} className="sm:w-[95%] lg:w-[50%] sm:h-80 lg:h-[85vh] border-2 border-black">
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />
        </MapContainer> 
    );
};