import React from "react";
import { Box } from "rebass/styled-components";
import useScroll from "../hooks/useScroll";
import About from "../sections/About";
import Member from "../sections/Member";
import News from "../sections/News";
// import BG from "/sampleBG.jpeg";

const Contents = () => {
  const { stage } = useScroll();
  const renderContents = () => {
    switch (stage) {
      case 0:
        return <About />;
      case 1:
        return <Member />;
      case 2:
        return <News />;
    }
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
        <Box sx={{ marginBottom: "200px" }}>{renderContents()}</Box>
      </Box>
      <Box sx={{ height: "300vh" }}></Box>
    </>
  );
};

export default Contents;
