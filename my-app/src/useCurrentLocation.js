import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
          setError(null);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
          setLocation(null);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
      setLoading(false);
      setLocation(null);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return { location, loading, error, getCurrentLocation };
};

export default useCurrentLocation;
