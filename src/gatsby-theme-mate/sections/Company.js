import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ReactMarkdown from 'react-markdown';
import Components from "../components/MarkdownComponent";
import Section from "../components/SectionSub";
import { Fade } from 'react-awesome-reveal';
import { Box, Flex } from 'rebass/styled-components';
import Triangle from "gatsby-theme-mate/src/components/Triangle";

export default () => (
  <StaticQuery
  query={graphql`
  query CompanyQuery {
    contentfulDocument(text: {childMarkdownRemark: {id: {eq: "6d902236-5ff9-5d7b-b9a0-487a92874bce"}}}) {
      text {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`}
  render={data => (
    <Section.Container Background={Background}>
    <Box height={80}></Box>
    <Section.Header name={"会社概要"} />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[ 9 / 10, 9 / 10 , 3 / 5]} px={[1, 2, 4]} >
        <Fade direction="down" triggerOnce>
          <ReactMarkdown children={data.contentfulDocument.text.childMarkdownRemark.rawMarkdownBody} components={Components} />
        </Fade>
      </Box>
      <Box height={60}></Box>
    </Flex>
  </Section.Container>
  )}
  />
);

const Background = () => (
  <>
    <Triangle
      color="muted"
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
      color="secondary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);
