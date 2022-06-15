import { useEffect, useRef, useState } from "react";
import { isBrowser } from "../utils";

const options: IntersectionObserverInit = {
  threshold: 0.3 // 対象の要素の3割がviewに入ってきたら、intersectしたとみなす
};

const useIntersectionObserver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (!isBrowser()) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    }, options);

    if (ref.current === null) return;

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;
