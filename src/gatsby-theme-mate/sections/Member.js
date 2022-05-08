import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "gatsby-theme-mate/src/components/Section";
import { CardContainer } from "gatsby-theme-mate/src/components/Card";
import Triangle from "gatsby-theme-mate/src/components/Triangle";
import Project from "gatsby-theme-mate/src/components/Project";
import { useProjectsQuery } from "gatsby-theme-mate/src/queries/useProjectsQuery";
import { SECTION } from "../utils/constants";

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <Section.Container id={SECTION.member}>
      <Section.Header name={SECTION.member} />

      <CardContainer minWidth="350px">
        <Fade triggerOnce>
          {projects.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle color="color3" height={["80vh", "80vh"]} width={["100vw", "100vw"]} position="top-right" />

    <Triangle color="background" height={["50vh", "20vh"]} width={["50vw", "50vw"]} position="top-right" />

    <Triangle color="color2" height={["25vh", "40vh"]} width={["75vw", "60vw"]} position="bottom-right" />

    <Triangle color="color2" height={["25vh", "20vh"]} width={["100vw", "100vw"]} position="bottom-right" />
  </>
);

export default Projects;
