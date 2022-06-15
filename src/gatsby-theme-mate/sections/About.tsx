import { graphql, useStaticQuery } from "gatsby";
import Section from "gatsby-theme-mate/src/components/Section";
import { Fade } from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";
import { Box, Flex, Image } from "rebass/styled-components";
import styled from "styled-components";
import components from "../components/MarkdownComponent";
import { SECTION } from "../utils/constants";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutGroupyQuery {
      contentfulAsset(id: { eq: "96b7693b-b570-5091-8082-31695910fda3" }) {
        resize(quality: 100, width: 450) {
          src
        }
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
            <ProfilePicture mt={[0, 4, 0]} ml={[0, 0, 1]} {...data.contentfulAsset.resize} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

export default About;
