import React, { ReactNode } from 'react';
import { Text } from 'rebass';
import { Components as MarkdownComponents } from 'react-markdown';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const MarkdownParagraph: React.FC = styled(Text)`
  padding-bottom: 1em;
  font-size: medium;
  line-height: 2em;
  font-weight: bold;

  @media (max-width: 600px) {
    line-height: 1.8em;
    font-size: 15px;
  }
`;

const MarkdownList: React.FC = styled.ul`
  margin: 0;
  padding-left: 0px;
`;

const MarkdownListItem: React.FC = styled.li`
  font-size: medium;
  line-height: 2em;

  @media (max-width: 600px) {
    line-height: 1.8em;
    font-size: 15px;
  }
`;
const MarkdownNumList: React.FC = styled.ul`
padding-left: 20px;
  list-style-type: decimal;
`;

type LinkProps = {
  href?: string;
  children: ReactNode;
};

const MarkdownLink = ({ href, children }: LinkProps) => {
  const isInnerLink = href?.startsWith('#');

  return isInnerLink ? (
    <StyledLink href={href}>{children}</StyledLink>
  ) : (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};

const Components: MarkdownComponents = {
  p: MarkdownParagraph,
  ul: MarkdownList,
  li: MarkdownListItem,
  ol: MarkdownNumList,
  a: MarkdownLink,
};

export default Components;
