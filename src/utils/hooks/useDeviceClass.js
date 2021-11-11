import React, { useEffect, useState } from "react";

const useDeviceClass = () => {
  const [device, setDevice] = useState("desktop");

  const determineDevice = () => {
    const screenSize = window.innerWidth;

    if (screenSize > 1100) {
      setDevice("desktop");
    } else if (screenSize <= 700) {
      setDevice("phone");
    } else {
      setDevice("tablet");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", determineDevice);

    return () => {
      window.removeEventListener("resize", determineDevice);
    };
  }, []);

  return device;
};

export default useDeviceClass;
