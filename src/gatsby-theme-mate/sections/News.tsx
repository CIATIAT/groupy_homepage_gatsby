import { CardContainer } from "gatsby-theme-mate/src/components/Card";
import { Post } from "gatsby-theme-mate/src/components/Post";
import Section from "gatsby-theme-mate/src/components/Section";
import { useMediumQuery } from "gatsby-theme-mate/src/queries/useMediumQuery";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { ForPC, ForSP } from "../../components/MediaQuery";
import { SECTION } from "../utils/constants";

const Writing = () => {
  const { posts } = useMediumQuery();

  return (
    <Section.Container id={SECTION.news}>
      <Section.Header name={SECTION.news} label="writing" />
      <ForSP>
        <Fade triggerOnce>
          <Swiper spaceBetween={5} slidesPerView={posts.length > 1 ? 1.1 : 1}>
            {posts.map((p) => (
              <SwiperSlide style={{ padding: "5px 0" }}>
                <Post {...p} key={p.url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </ForSP>
      <ForPC>
        <CardContainer minWidth="300px">
          <Fade triggerOnce>
            {posts.map((p) => (
              <Post {...p} key={p.url} />
            ))}
          </Fade>
        </CardContainer>
      </ForPC>
    </Section.Container>
  );
};

export default Writing;
