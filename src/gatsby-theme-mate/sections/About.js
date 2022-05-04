import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from 'gatsby-theme-mate/src/components/Section';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import components from 'gatsby-theme-mate/src/components/MarkdownComponents';
import { useAboutMeQuery } from 'gatsby-theme-mate/src/queries/useAboutMeQuery';
import { SECTION } from '../utils/constants';
import { graphql } from 'gatsby';
import { StaticQuery } from 'gatsby';

const About = () => {
  const { markdown, profile } = useAboutMeQuery();
};

export default () => (
  <StaticQuery
  query={graphql`
      query AboutGroupyQuery {
        contentfulAsset(id: {eq: "96b7693b-b570-5091-8082-31695910fda3"}) {
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
  `}
  render={data => (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about+"について"} label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown children={data.contentfulAbout.childContentfulAboutAboutMeTextNode.childMarkdownRemark.rawMarkdownBody} components={components} />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce>
            <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} {...data.contentfulAsset.resize} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  )}
  />
);


const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

// export default About;