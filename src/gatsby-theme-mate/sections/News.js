import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from 'gatsby-theme-mate/src/components/Section';
import { CardContainer } from 'gatsby-theme-mate/src/components/Card';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import { useMediumQuery } from 'gatsby-theme-mate/src/queries/useMediumQuery';
import { Post } from 'gatsby-theme-mate/src/components/Post';
import { SECTION } from '../utils/constants';

const Writing = () => {
  const { posts } = useMediumQuery();

  return (
    <Section.Container id={SECTION.news} Background={Background}>
      <Section.Header name={SECTION.news} label="writing" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
          {posts.map((p) => (
            <Post {...p} key={p.url} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Writing;
