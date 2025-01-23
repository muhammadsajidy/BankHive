import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import CoordinateContext from "../context/CoordinateContext";


export default function MapViewer() {
    const {coordinate} = useContext(CoordinateContext);
    const {address} = useContext(CoordinateContext);
    const {lat, lng} = coordinate;

    return (
        <MapContainer center={[28.61, 77.23]} zoom={3} className="sm:w-[90%] lg:w-[47%] sm:h-80 lg:h-[85vh] sm:mt-2 lg:mt-0 border-[1.5px] border-black">
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />
            {(lat, lng != 0) ? 
            <Marker position={[lat, lng]}>
                <Popup>
                {address}
                </Popup>
            </Marker> : null}
        </MapContainer> 
    );
};

