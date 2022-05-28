import React from "react";
import { Box, Flex } from "rebass/styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import Section from "gatsby-theme-mate/src/components/Section";
import components from "../components/MarkdownComponent";
import { SECTION } from "../utils/constants";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutGroupyQuery {
      contentfulAsset(id: { eq: "96b7693b-b570-5091-8082-31695910fda3" }) {
        gatsbyImageData(quality: 100, width: 450)
      }
      contentfulAbout {
        childContentfulAboutAboutMeTextNode {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);
  const groupyLogo = getImage(data.contentfulAsset);

  return (
    <Section.Container id={SECTION.about}>
      <Section.Header name={SECTION.about + "について"} label="person" />
      <Flex justifyContent="left" alignItems="left" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} mt={2} verticalAlign="left">
          <Fade triggerOnce>
            <ReactMarkdown
              children={data.contentfulAbout.childContentfulAboutAboutMeTextNode.childMarkdownRemark.rawMarkdownBody}
              components={components}
            />
          </Fade>
        </Box>
        <Box width={[1, 1, 2 / 6]} style={{ maxWidth: "300px", margin: "auto" }}>
          <Fade triggerOnce>
            <GatsbyImage image={groupyLogo} alt="groupyのロゴ画像" />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default About;
