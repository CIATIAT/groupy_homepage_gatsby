import { useState, useEffect } from "react";

const useScroll = () => {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const windowHeight = window.innerHeight;

  const handleScroll = () => {
    const scrollAmountFromContents = window.pageYOffset - windowHeight;
    if (scrollAmountFromContents < windowHeight) {
      setStage(0);
    } else if (scrollAmountFromContents < windowHeight * 2) {
      setStage(1);
    } else {
      setStage(2);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return { stage };
};

export default useScroll;
