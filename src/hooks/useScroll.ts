import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

const useScroll = () => {
  const [stage, setStage] = useState<"about" | "member" | "news">("about");

  const handleScroll = () => {
    if (!isBrowser()) return;
    const threshold = window.innerHeight;
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
    if (!isBrowser()) return;
    window.addEventListener("scroll", handleScroll);
  }, []);

  return stage;
};

export default useScroll;
