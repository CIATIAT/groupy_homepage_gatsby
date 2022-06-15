import { useEffect, useState } from "react";
import { Box, SxStyleProp } from "rebass/styled-components";
import { isBrowser } from "../../utils";
import About from "../sections/About";
import Member from "../sections/Member";
import News from "../sections/News";
// import BG from "/sampleBG.jpeg";

const useStage = () => {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return stage;
};

const Contents = () => {
  const stage = useStage();

  const generateConditionalStyles = (stageName: typeof stage): SxStyleProp => {
    return {
      visibility: stage === stageName ? "visible" : "hidden",
      height: stage === stageName ? "auto" : 0,
      opacity: stage === stageName ? 1 : 0,
      transition: "opacity 0.3s"
    };
  };

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: "0",
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "white"
          // NOTE: ↓背景に画像をあてる場合
          // backgroundImage: `url(${BG})`,
          // backgroundSize: "cover"
        }}
      >
        <Box sx={{ marginBottom: "200px" }}>
          <Box sx={generateConditionalStyles("about")}>
            <About />
          </Box>
          <Box sx={generateConditionalStyles("member")}>
            <Member />
          </Box>
          <Box sx={generateConditionalStyles("news")}>
            <News />
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "300vh" }}></Box>
    </>
  );
};

export default Contents;
