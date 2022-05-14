import React from "react";
import ReactMarkdown from "react-markdown";
import Components from "../components/MarkdownComponentTerms";
import Section from "../components/SectionSub";
import { Fade } from "react-awesome-reveal";
import { Box, Flex } from "rebass/styled-components";
import Triangle from "gatsby-theme-mate/src/components/Triangle";

export default () => (
  <Section.Container Background={Background}>
    <Box height={80}></Box>
    <Section.Header name={"PCではご利用いただけません"} />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 3 / 5]} px={[1, 2, 4]}>
        <Fade direction="down" triggerOnce>
          <ReactMarkdown
            children={"現在iPhone,Android端末でのみインストール可能です。モバイルにてアプリダウンロードをお願い致します。"}
            components={Components}
          />
        </Fade>
      </Box>
    </Flex>
    <Box height={60}></Box>
  </Section.Container>
);

const Background = () => (
  <>
    <Triangle color="groupyPurple" height={["50vh", "20vh"]} width={["50vw", "50vw"]} position="bottom-left" />

    <Triangle color="color2" height={["20vh", "40vh"]} width={["75vw", "70vw"]} position="top-right" />

    <Triangle color="color3" height={["25vh", "20vh"]} width={["100vw", "100vw"]} />
  </>
);
