import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Section from "gatsby-theme-mate/src/components/Section";
import ReactMarkdown from "react-markdown";
import { Box, Flex } from "rebass/styled-components";
import styled from "styled-components";
import components from "../components/MarkdownComponent";
import { SECTION } from "../utils/constants";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutGroupyQuery {
      contentfulAbout {
        childContentfulAboutAboutMeTextNode {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return (
    <Section.Container id={SECTION.about}>
      <Section.Header name={SECTION.about + "について"} label="person" />
      <Flex justifyContent="left" alignItems="left" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} mt={2} verticalAlign="left">
          <ReactMarkdown
            children={data.contentfulAbout.childContentfulAboutAboutMeTextNode.childMarkdownRemark.rawMarkdownBody}
            components={components}
          />
        </Box>
        <Box width={[1, 1, 2 / 6]} style={{ maxWidth: "300px", margin: "auto" }}>
          <StaticImage src="../../images/app_icon.png" alt="groupyアプリのアイコン" width={300} quality={100} />
        </Box>
      </Flex>
    </Section.Container>
  );
};

const PictureBox = styled(Box)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

export default About;
