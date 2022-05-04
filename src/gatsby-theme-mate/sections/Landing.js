import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from 'gatsby-theme-mate/src/components/Section';
import SocialLink from 'gatsby-theme-mate/src/components/SocialLink';
import ScrollIcon from 'gatsby-theme-mate/src/components/ScrollIcon';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import { useSiteQuery } from 'gatsby-theme-mate/src/queries/useSiteQuery';
import { SECTION } from '../utils/constants';
import { getSectionHref } from 'gatsby-theme-mate/src/utils/helpers';
import { Fade } from 'react-awesome-reveal';


const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { name, roles, socialLinks, deterministic } = useSiteQuery();

  return (
    <Section.Container id={SECTION.home} Background={Background}>
      <Fade direction="down" triggerOnce>
        <Heading
          textAlign="center"
          as="h1"
          color="primary"
          fontSize={[5, 7]}
          mb={[3, 4, 5]}
        >
          {name}
        </Heading>
      </Fade>
      <Fade direction="down" triggerOnce>
        <Heading
          as="h2"
          color="primary"
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
          {socialLinks.map((sl) => (
            <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
              <SocialLink {...sl} />
            </Box>
          ))}
        </Fade>
      </Flex>

      <ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
    </Section.Container>
  );
};

const Background = () => (
  <>
  <Fade direction="left" triggerOnce>
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
    />
  </>
);

export default LandingPage;