import React, { Dispatch, SetStateAction } from "react";
import { Box, Flex, Text, Link } from "rebass/styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        right: isDrawerOpened ? 0 : "100%",
        zIndex: 100,
        backgroundColor: "#fff",
        padding: "0 16px",
        transiton: "all 1s"
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
    </Box>
  );
};

export default Drawer;
