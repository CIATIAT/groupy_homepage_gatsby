import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "gatsby-theme-mate/src/components/Link";
import { SECTION } from "gatsby-theme-mate/src/utils/constants";
import { getSectionHref } from "gatsby-theme-mate/src/utils/helpers";

type ContainerProps = {
  id?: SECTION;
  children: ReactNode;
  Background?: () => JSX.Element;
};

const Container = ({ id, children, Background = DefaultBackground }: ContainerProps) => (
  <section id={id && getSectionHref(id)} style={{ position: "relative" }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </section>
);

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};

const Header = ({ name, icon, label }: HeaderProps) => (
  <Fade triggerOnce>
    <Heading color="text" mb={50}>
      <Link selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: "10px" }}>
            {icon}
          </span>
        )}
      </Link>
    </Heading>
  </Fade>
);

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`;

const DefaultBackground = () => <div />;

export default {
  Container,
  Header
};
