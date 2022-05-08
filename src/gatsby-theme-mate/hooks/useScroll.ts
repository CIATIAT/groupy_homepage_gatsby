import { useState, useEffect } from "react";

const useScroll = () => {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const threshold = window.innerHeight / 2; // window.innerHeightの半分の値分スクロールしたらコンテンツを入れ替える

  const handleScroll = () => {
    const scrollAmountFromContents = window.pageYOffset - window.innerHeight;
    if (scrollAmountFromContents < threshold) {
      setStage(0);
    } else if (scrollAmountFromContents < threshold * 2) {
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
