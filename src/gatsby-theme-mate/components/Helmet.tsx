import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { withTheme } from "styled-components";
import { Theme } from "gatsby-theme-mate/src/types";
import { useHelmetQuery } from "gatsby-theme-mate/src/queries/useHelmetQuery";

type Props = {
  theme: Theme;
  title: string;
  description: string;
};

const Helmet = (props: Props) => {
  const query = useHelmetQuery();
  const title = props.title || "groupy -大学生限定グループマッチングアプリ【公式】";
  const description = props.description || query.description;
  const domain = "groupy.space";

  return (
    <ReactHelmet htmlAttributes={{ lang: "ja" }}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={`https:${domain}${query.profile.favicon32.src}`} />
      <meta name="theme-color" content={props.theme.colors.groupyPurple} data-react-helmet="true" />
      <meta name="apple-mobile-web-app-status-bar-style" content={props.theme.colors.groupyPurple} />
      <meta name="image" content={`https:${domain}${query.profile.favicon32.src}`} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={`https:${domain}${query.profile.favicon32.src}`} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={`https:${domain}${query.profile.bigIcon.src}`} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="ja" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https:${domain}${query.profile.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`https:${domain}${query.profile.bigIcon.src}`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`https:${domain}${query.profile.appleIcon.src}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`https:${domain}${query.profile.favicon32.src}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`https:${domain}${query.profile.favicon16.src}`} />
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
