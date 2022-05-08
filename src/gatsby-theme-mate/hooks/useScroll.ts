import { useState, useEffect } from "react";

const useScroll = () => {
  const [stage, setStage] = useState<"about" | "member" | "news">("about");
  const threshold = window.innerHeight; // window.innerHeightの半分の値分スクロールしたらコンテンツを入れ替える

  const handleScroll = () => {
    const scrollAmountFromContents = window.pageYOffset - window.innerHeight;
    if (scrollAmountFromContents < threshold) {
      setStage("about");
    } else if (scrollAmountFromContents < threshold * 2) {
      setStage("member");
    } else {
      setStage("news");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return stage;
};

export default useScroll;
