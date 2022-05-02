import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { withTheme } from 'styled-components';
import { Theme } from 'gatsby-theme-mate/src/types';
import { useHelmetQuery } from 'gatsby-theme-mate/src/queries/useHelmetQuery';

type Props = {
  theme: Theme;
};

const Helmet = ({ theme }: Props) => {
  const { name, description, profile } = useHelmetQuery();
  const title = `${name} Portfolio`;
  const domain = `groupy.space`

  return (
    <ReactHelmet htmlAttributes={{ lang: 'jp' }}>
      <meta charSet="utf-8" />
      <title>Groupy Inc.</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={`https:${domain}${profile.favicon32.src}`} />
      <meta name="theme-color" content={theme.colors.background} />
      <meta name="image" content={`https:${domain}${profile.favicon32.src}`} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={`https:${domain}${profile.favicon32.src}`} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={`https:${domain}${profile.bigIcon.src}`} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="ja" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https:${domain}${profile.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`https:${domain}${profile.bigIcon.src}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`https:${domain}${profile.appleIcon.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`https:${domain}${profile.favicon32.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`https:${domain}${profile.favicon16.src}`}
      />
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
