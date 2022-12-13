import { GoogleMap, DirectionsRenderer, Marker, MarkerF } from "@react-google-maps/api";
import { useCallback, useState, useEffect, useRef } from "react";


const GoogleMaps = () => {
    const [map, setMap] = useState(null)

    const center = {
        lat: 30.3753,
        lng: 69.3451
    };

    const mapStyles = {
        maxWidth: "12000px",
        height: "100%",
    };


    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);


    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    return (
        <GoogleMap
            center={center}
            zoom={6}
            mapContainerStyle={mapStyles}
            onLoad={onMapLoad}
            onUnmount={onUnmount}
        >
            <MarkerF
                onLoad={onMapLoad}
                clickable={true}
                draggable={true}
                position={center}
            />
        </GoogleMap>
    )
}

export default GoogleMaps;