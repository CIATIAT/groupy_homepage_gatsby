import { useEffect, useState } from "react";

const useOpacityChange = (threshhold) => {
  const [opacity, setOpacity] = useState<number>(1);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const opacityRate = window.pageYOffset / threshhold;
    setOpacity(1 - opacityRate);
  };
  return opacity;
};

export default useOpacityChange;
