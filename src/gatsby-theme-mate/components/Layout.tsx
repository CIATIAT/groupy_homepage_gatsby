import React, { ReactNode } from "react";
import { Theme } from "gatsby-theme-mate/src/types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { loadIcons } from "gatsby-theme-mate/src/utils/icons";
import { theme } from "gatsby-theme-mate/src/theme";
import "tippy.js/dist/tippy.css";
import "swiper/css";
import { useAtomValue } from "jotai";
import { isDrawerOpenedAtom } from "../../atoms";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

loadIcons();

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const isDrawerOpened = useAtomValue(isDrawerOpenedAtom);

  const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
      box-sizing: inherit;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      box-sizing: border-box;
      margin: 0;
      width: 100vw;
      overflow-x: hidden;
      font-family: ${(props) => props.theme.fonts.body};
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      position: ${isDrawerOpened ? "fixed" : "static"}
    }
`;

  return (
    <main>
      <ThemeProvider theme={theme as Theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </main>
  );
};

export default Layout;
