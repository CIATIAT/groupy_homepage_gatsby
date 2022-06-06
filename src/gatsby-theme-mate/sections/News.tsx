import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "gatsby-theme-mate/src/components/Section";
import { CardContainer } from "gatsby-theme-mate/src/components/Card";
import { useMediumQuery } from "gatsby-theme-mate/src/queries/useMediumQuery";
import { Post } from "gatsby-theme-mate/src/components/Post";
import { SECTION } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Writing = () => {
  const { posts } = useMediumQuery();
  const breakpoints = useBreakpoint();

  return (
    <Section.Container id={SECTION.news}>
      <Section.Header name={SECTION.news} label="writing" />
      {breakpoints.sm ? (
        <Fade triggerOnce>
          <Swiper spaceBetween={5} slidesPerView={posts.length > 1 ? 1.1 : 1}>
            {posts.map((p) => (
              <SwiperSlide style={{ padding: "5px 0" }}>
                <Post {...p} key={p.url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      ) : (
        <CardContainer minWidth="300px">
          <Fade triggerOnce>
            {posts.map((p) => (
              <Post {...p} key={p.url} />
            ))}
          </Fade>
        </CardContainer>
      )}
    </Section.Container>
  );
};

export default Writing;
