import { useEffect, useState } from "react";
import { isBrowser } from "../utils";

const useOpacityChange = (threshhold) => {
  const [opacity, setOpacity] = useState<number>(1);
  useEffect(() => {
    if (!isBrowser()) return;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!isBrowser()) return;
    const opacityRate = window.pageYOffset / threshhold;
    setOpacity(1 - opacityRate);
  };
  return opacity;
};

export default useOpacityChange;
