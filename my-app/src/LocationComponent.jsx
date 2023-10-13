import useCurrentLocation from "./useCurrentLocation";

const LocationComponent = () => {
    const { location, loading, error, getCurrentLocation } = useCurrentLocation();

    return (
        <div>
            <h2>Current Location</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : location ? (
                <div>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            ) : (
                <button onClick={getCurrentLocation}>Get Current Location</button>
            )}
        </div>
    );
};

export default LocationComponent;
