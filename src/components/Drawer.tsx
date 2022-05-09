import React, { Dispatch, SetStateAction } from "react";
import { default as ModernDrawer } from "react-modern-drawer";
import { Box, Flex, Text, Link } from "rebass/styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SECTION } from "../gatsby-theme-mate/utils/constants";

import "react-modern-drawer/dist/index.css";
import { isBrowser } from "../utils";

const Drawer = ({
  isDrawerOpened,
  setIsDrawerOpened
}: {
  isDrawerOpened: boolean;
  setIsDrawerOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ModernDrawer
      open={isDrawerOpened}
      onClose={() => setIsDrawerOpened(false)}
      size="100vw"
      direction="right"
      duration={250}
      style={{ padding: "0 16px" }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>Groupy Inc.</h1>
        <Box onClick={() => setIsDrawerOpened(false)}>
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
                  if (isBrowser()) window.scrollTo({ top: window.innerHeight * (index + 1), behavior: "smooth" });
                  setIsDrawerOpened(false);
                }}
              >
                <Text fontSize={4}>{SECTION[id]}</Text>
              </Link>
            </Box>
          ))}
      </Flex>
    </ModernDrawer>
  );
};

export default Drawer;
