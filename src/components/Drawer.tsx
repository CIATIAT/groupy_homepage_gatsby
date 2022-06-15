import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import { Box, Flex, Link, Text } from "rebass/styled-components";
import { SECTION } from "../gatsby-theme-mate/utils/constants";

const Drawer = ({
  isDrawerOpened,
  setIsDrawerOpened,
  handleLinkClick,
  targetScrollPosition
}: {
  isDrawerOpened: boolean;
  setIsDrawerOpened: Dispatch<SetStateAction<boolean>>;
  handleLinkClick: (index: number) => void;
  targetScrollPosition: number;
}) => {
  const handleDrawerClose = () => {
    window.scrollTo({ top: targetScrollPosition });
    setIsDrawerOpened(false);
  };

  return (
    <div
      // headroomのcssに影響を受けないためにinline styleを使用
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        right: "-100%",
        zIndex: "100",
        backgroundColor: "#fff",
        padding: "0 16px",
        transition: "transform 0.3s ease",
        transform: isDrawerOpened ? "translateX(-100%)" : "translateX(0)"
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box sx={{ fontSize: "14px" }}>
          <h1>Groupy Inc.</h1>
        </Box>
        <Box onClick={handleDrawerClose}>
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </Box>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        {(Object.keys(SECTION) as Array<keyof typeof SECTION>)
          .filter((id) => id !== "home")
          .map((id, index) => (
            <Box sx={{ padding: "10px" }} key={id}>
              <Link
                href={`#${id}`}
                sx={{ textDecoration: "none", fontWeight: "semibold" }}
                onClick={() => {
                  handleLinkClick(index);
                  setIsDrawerOpened(false);
                }}
              >
                <Text fontSize={4}>{SECTION[id]}</Text>
              </Link>
            </Box>
          ))}
      </Flex>
    </div>
  );
};

export default Drawer;
