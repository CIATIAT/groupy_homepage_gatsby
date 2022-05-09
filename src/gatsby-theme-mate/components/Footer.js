import React from "react";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import SocialLink from "./SocialLink";
import Link from "gatsby-theme-mate/src/components/Link";
import { useSiteQuery } from "gatsby-theme-mate/src/queries/useSiteQuery";
import { CONTENTFUL_URL, GATSBY_URL, NETLIFY_URL } from "gatsby-theme-mate/src/utils/constants";

const Footer = () => {
  const { name, socialLinks } = useSiteQuery();

  return (
    <Box p={[2, 3]} backgroundColor="color4" id="footer" as="footer" sx={{ position: "relative" }}>
      <FooterContainer>
        <Fade direction="left" triggerOnce>
          <Text fontSize={[1, 2]} color="background">
            <Link href="/company">会社概要</Link>
            <span>　</span>
            <Link href="/terms">利用規約</Link>
            <span>　</span>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
            <span>　</span>
            <Link href="/transaction-terms">特定商取引法に基づく表示</Link>
          </Text>
        </Fade>
        <Flex>
          <Fade direction="right" triggerOnce cascade damping={0.5}>
            {socialLinks.map((sl) => (
              <Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
                <SocialLink {...sl} invert />
              </Box>
            ))}
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  );
};

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 425px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

export default Footer;
