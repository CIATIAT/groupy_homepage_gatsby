import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { stageState } from "../../atoms";

const useScroll = () => {
  const [stage, setStage] = useRecoilState(stageState);
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
