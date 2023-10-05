const AlertClock = () => {
  const handleShowAlert = () => {
    const time = new Date().toLocaleTimeString();

    alert(`The time is ${time}`);
  };

  return <button onClick={handleShowAlert}>Show Current Time!</button>;
};

export default AlertClock;
