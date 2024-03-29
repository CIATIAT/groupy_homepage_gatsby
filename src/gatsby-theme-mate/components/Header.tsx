import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-theme-mate/src/components/Link";
import { useAtom } from "jotai";
import { useState } from "react";
import Headroom from "react-headroom";
import { Box, Flex, Link as RebassLink } from "rebass/styled-components";
import styled from "styled-components";
import { isDrawerOpenedAtom } from "../../atoms";
import Drawer from "../../components/Drawer";
import { ForPC, ForSP } from "../../components/MediaQuery";
import useCurrentScrollPosition from "../../hooks/useCurrentScrollPosition";
import { isBrowser } from "../../utils";
import { SECTION } from "../utils/constants";

const Header = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useAtom(isDrawerOpenedAtom);
  const currentScrollPosition = useCurrentScrollPosition();
  const [targetScrollPosition, setTargetScrollPosition] = useState(currentScrollPosition);

  const handleLinkClick = (index: number) => {
    if (isBrowser()) {
      const HEIGHT_OF_LANDING = window.innerHeight; // Landingコンポーネントのheightを取得（いまのところinnerHeight）
      // aタグで押した後、少しでも上にスクロールしてしまうと表示される画面が変わってしまうため、スクロール分に余裕を持たせる
      const EXTRA_ROOM = window.innerHeight / 4;
      window.scrollTo({ top: HEIGHT_OF_LANDING + EXTRA_ROOM + window.innerHeight * index, behavior: "smooth" });
    }
  };

  const handleDrawerOpen = () => {
    // drawerを閉じた時に戻る位置を設定
    setTargetScrollPosition(currentScrollPosition);
    setIsDrawerOpened(true);
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
        <ForSP>
          <Box>
            <Box onClick={handleDrawerOpen}>
              <FontAwesomeIcon icon={faBars} size="2x" color="white" />
            </Box>
            <Drawer
              isDrawerOpened={isDrawerOpened}
              setIsDrawerOpened={setIsDrawerOpened}
              handleLinkClick={handleLinkClick}
              targetScrollPosition={targetScrollPosition}
            />
          </Box>
        </ForSP>
        <ForPC>
          <Flex mr={[0, 3, 5]}>
            {(Object.keys(SECTION) as Array<keyof typeof SECTION>)
              .filter((id) => id !== "home")
              .map((id, index) => (
                <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                  <Link onClick={() => handleLinkClick(index)}>{SECTION[id]}</Link>
                </Box>
              ))}
          </Flex>
        </ForPC>
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
