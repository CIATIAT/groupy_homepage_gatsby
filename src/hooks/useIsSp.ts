import { useEffect, useState } from "react";

const useIsSp = () => {
  const [isSp, setIsSp] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const listener = () => setIsSp(media.matches);
    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [isSp]);
  return isSp;
};

export default useIsSp;
