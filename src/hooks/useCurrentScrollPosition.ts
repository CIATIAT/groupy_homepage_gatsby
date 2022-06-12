import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

const useCurrentScrollPosition = () => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    setCurrentScrollPosition(window.scrollY);
  };

  useEffect(() => {
    if (!isBrowser()) return;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return currentScrollPosition;
};

export default useCurrentScrollPosition;
