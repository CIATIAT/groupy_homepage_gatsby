import React from "react";
import { Heading, Flex, Box, Text, Link } from "rebass/styled-components";
import TextLoop from "react-text-loop";
import Section from "../components/Section";
import ScrollIcon from "../components/ScrollIcon";
import { useSiteQuery } from "gatsby-theme-mate/src/queries/useSiteQuery";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "gatsby-theme-mate/src/utils/helpers";
import { Fade } from "react-awesome-reveal";
import webBG from "/webBG1080.jpg";
import bgVideo from "/bgVideo1080.mp4";
import useOpacityChange from "../../hooks/useOpacityChange";
import styled from "styled-components";

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };
const DISAPPER_THRESHOLD = 400;

const LandingPage = () => {
  const { name, roles, deterministic } = useSiteQuery();
  const opacity = useOpacityChange(DISAPPER_THRESHOLD);

  return (
    <Box sx={{ position: "relative" }}>
      <VideoBox>
        <Video poster={webBG} playsInline muted autoPlay loop>
          <source src={bgVideo} type="video/mp4" />
          <p>動画を再生できる環境ではありません。</p>
        </Video>
      </VideoBox>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%" }}>
        <Section.Container id={SECTION.home}>
          <Box sx={{ opacity }}>
            <Fade direction="down" triggerOnce>
              <Heading textAlign="center" as="h1" color="white" fontSize={[5, 7]} mb={[3, 4, 5]}>
                {name}
              </Heading>
            </Fade>
            <Fade direction="down" triggerOnce>
              <Heading
                as="h2"
                color="white"
                fontSize={[4, 6]}
                mb={[3, 5]}
                textAlign="center"
                style={centerHorizontally}
              >
                <TextLoop interval={5000}>
                  {roles
                    .sort(() => (deterministic ? 1 : Math.random() - 0.5))
                    .map((text) => (
                      <Text width={[300, 500]} key={text}>
                        {text}
                      </Text>
                    ))}
                </TextLoop>
              </Heading>
            </Fade>
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              <Fade direction="right" triggerOnce cascade damping={0.5}>
                <Link
                  href=""
                  sx={{
                    color: "#fff",
                    border: "solid",
                    borderColor: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    lineHeight: "1.5",
                    position: "relative",
                    display: "inline-block",
                    padding: "1rem 4rem",
                    cursor: "pointer",
                    webkitUserSelect: "none",
                    mozUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                    webkitTransition: "all 0.3s",
                    transition: "all 0.3s",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    borderRadius: "2rem"
                  }}
                >
                  インストールはこちら
                </Link>
                {/* {socialLinks.map((sl) => (
            <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
              <SocialLink {...sl} />
            </Box>
          ))} */}
              </Fade>
            </Flex>
          </Box>
          <ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
        </Section.Container>
      </Box>
    </Box>
  );
};

const VideoBox = styled(Box)`
  position: relative;
  zindex: -1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &:after {
    background-color: rgba(0, 0, 0, 0.4);
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`;

const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  &[poster] {
    width: 100%;
    object-fit: cover;
  }
`;

const Background = () => (
  <>
    {/* <img
      src={BG}
      alt="Logo"
      width={["100%", "100%"]}
      style={{
        position: "absolute",
        // paddingTop: 'calc(3000 / 4000 * 100%)',
        backgroundPosition: "centercenter",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    /> */}
  </>
  /* <Fade direction="left" triggerOnce>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />
  </Fade>
  <Fade direction="left" triggerOnce>
    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />
  </Fade>
  <Fade direction="right" triggerOnce>
    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />
  </Fade>
    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-left"
    /> */
);

export default LandingPage;
