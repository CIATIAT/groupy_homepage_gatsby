import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { CardContainer } from "gatsby-theme-mate/src/components/Card";
import Section from "gatsby-theme-mate/src/components/Section";
import { useProjectsQuery } from "gatsby-theme-mate/src/queries/useProjectsQuery";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../../components/Project";
import { SECTION } from "../utils/constants";

const Members = () => {
  const projects = useProjectsQuery();
  const breakpoints = useBreakpoint();
  return (
    <Section.Container id={SECTION.member}>
      <Section.Header name={SECTION.member} />

      {breakpoints.sm ? (
        <Fade triggerOnce>
          <Swiper spaceBetween={5} slidesPerView={projects.length > 1 ? 1.1 : 1}>
            {projects.map((p, i) => (
              <SwiperSlide style={{ padding: "5px 0" }}>
                <Project {...p} key={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      ) : (
        <CardContainer minWidth="350px">
          <Fade triggerOnce>
            {projects.map((p, i) => (
              <Project {...p} key={i} />
            ))}
          </Fade>
        </CardContainer>
      )}
    </Section.Container>
  );
};

export default Members;
