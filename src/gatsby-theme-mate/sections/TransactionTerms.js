import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ReactMarkdown from 'react-markdown';
import Components from "../components/MarkdownComponentTerms";
import Section from "../components/SectionSub";
import { Fade } from 'react-awesome-reveal';
import { Box, Flex } from 'rebass/styled-components';
import Triangle from "gatsby-theme-mate/src/components/Triangle";

export default () => (
  <StaticQuery
  query={graphql`
  query TransactionTermsQuery {
    contentfulDocument(text: {childMarkdownRemark: {id: {eq: "b20941f2-1512-56ea-a93c-8c5d6957a7a8"}}}) {
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
    <Section.Header name={"特定商取引法に基づく表示"} />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 3 / 5]} px={[1, 2, 4]} >
        <Fade direction="down" triggerOnce>
          <ReactMarkdown children={data.contentfulDocument.text.childMarkdownRemark.rawMarkdownBody} components={Components} />
        </Fade>
      </Box>
    </Flex>
    <Box height={60}></Box>
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
