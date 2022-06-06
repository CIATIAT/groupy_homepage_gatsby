import React, { useState } from "react";
import Headroom from "react-headroom";
import { Box, Link as RebassLink, Flex, Image } from "rebass/styled-components";
import styled from "styled-components";
import Link from "gatsby-theme-mate/src/components/Link";
import { useHelmetQuery } from "gatsby-theme-mate/src/queries/useHelmetQuery";
import { SECTION } from "../utils/constants";
import Drawer from "../../components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { isBrowser } from "../../utils";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Header = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
  const breakpoints = useBreakpoint();

  const handleLinkClick = (index: number) => {
    if (isBrowser()) {
      const HEIGHT_OF_LANDING = window.innerHeight; // Landingコンポーネントのheightを取得（いまのところinnerHeight）
      // aタグで押した後、少しでも上にスクロールしてしまうと表示される画面が変わってしまうため、スクロール分に余裕を持たせる
      const EXTRA_ROOM = window.innerHeight / 4;
      window.scrollTo({ top: HEIGHT_OF_LANDING + EXTRA_ROOM + window.innerHeight * index, behavior: "smooth" });
    }
  };

  return (
    <StyledHeadroom>
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center" px={3}>
        <RebassLink
          href={`/`}
          variant="empty"
          style={{ textDecoration: "none", color: "white", fontWeight: 600 }}
          fontSize={[1, 2]}
        >
          <Flex justifyContent="center">
            <h1>Groupy Inc.</h1>
          </Flex>
        </RebassLink>
        {breakpoints.sm ? (
          <Box>
            <Box onClick={() => setIsDrawerOpened(true)}>
              <FontAwesomeIcon icon={faBars} size="2x" color="white" />
            </Box>
            <Drawer
              isDrawerOpened={isDrawerOpened}
              setIsDrawerOpened={setIsDrawerOpened}
              handleLinkClick={handleLinkClick}
            />
          </Box>
        ) : (
          <Flex mr={[0, 3, 5]}>
            {(Object.keys(SECTION) as Array<keyof typeof SECTION>)
              .filter((id) => id !== "home")
              .map((id, index) => (
                <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                  <Link href={`/#${id}`} tabIndex={0} onClick={() => handleLinkClick(index)}>
                    {SECTION[id]}
                  </Link>
                </Box>
              ))}
          </Flex>
        )}
      </Flex>
    </StyledHeadroom>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.groupyPurple};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
