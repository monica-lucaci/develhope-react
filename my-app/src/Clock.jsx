import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTimeString = () => {
    switch (language) {
      case "en":
        return "Current Time: ";
      case "fr":
        return "Heure Actuelle: ";
      case "es":
        return "Hora Actual: ";
      case "ro":
        return "Ora Curentã: ";
      case "it":
        return "Ora Attuale: ";
      default:
        return "Current Time: ";
    }
  };

  return (
    <div className="clock">
      <h2>
        {getTimeString()}
        {currentTime.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Clock;
