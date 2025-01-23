import { useState } from "react";
import PropTypes from "prop-types";
import CoordinateContext from "./CoordinateContext";

const CoordinateContextProvider = ({ children }) => {
    const [coordinate, setCoordinate] = useState({"lat": 0, "lng": 0});
    const [address, setAddress] = useState('');

    return(
        <CoordinateContext.Provider value={{ coordinate, setCoordinate, address, setAddress }}>
            {children}
        </CoordinateContext.Provider>
    );
};

CoordinateContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default CoordinateContextProvider;