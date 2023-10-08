import { useEffect, useRef } from "react";

const Refs = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("mounted for the first time");
    }
  }, []);

  return (
    <h2>
      Using StrictMode, create a component with an effect that prints a message
      only when the component is mounted the first time. Use a ref to keep track
      of whether the component is mounted or not.
    </h2>
  );
};

export default Refs;
