import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "gatsby-theme-mate/src/components/Section";
import { CardContainer } from "gatsby-theme-mate/src/components/Card";
import Triangle from "gatsby-theme-mate/src/components/Triangle";
import { useMediumQuery } from "gatsby-theme-mate/src/queries/useMediumQuery";
import { Post } from "gatsby-theme-mate/src/components/Post";
import { SECTION } from "../utils/constants";
import useIsSp from "../../hooks/useIsSp";
import { Swiper, SwiperSlide } from "swiper/react";

const Writing = () => {
  const { posts } = useMediumQuery();
  const isSp = useIsSp();

  return (
    <Section.Container id={SECTION.news}>
      <Section.Header name={SECTION.news} label="writing" />
      {isSp ? (
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

const Background = () => (
  <>
    <Triangle color="color2" height={["15vh", "10vh"]} width={["100vw", "100vw"]} position="top-left" />

    <Triangle color="color1" height={["50vh", "40vh"]} width={["70vw", "40vw"]} position="bottom-left" />

    <Triangle color="color1" height={["40vh", "15vh"]} width={["100vw", "100vw"]} position="bottom-right" />
  </>
);

export default Writing;
