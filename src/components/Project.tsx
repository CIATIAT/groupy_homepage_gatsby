import React from 'react';
import SocialLink from '../gatsby-theme-mate/components/SocialLink';
import ImageLabel from 'gatsby-theme-mate/src/components/ImageLabel';
import Hide from 'gatsby-theme-mate/src/components/Hide';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Project as ProjectType } from 'gatsby-theme-mate/src/types';
import { Card } from 'gatsby-theme-mate/src/components/Card';

type Props = ProjectType;

// 下線をなくすcss
const style: React.CSSProperties = {
  textDecoration: 'none',
};

const Project = ({
  name,
  description,
  homepage,
  repository,
  type,
  publishedDate,
  logo,
}: Props) => (
  <a href={homepage} target="_blank" rel="noopener noreferrer" style={style}>
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage {...logo} />
        <ProjectTag>
          <Flex
            m={1}
            style={{
              float: 'right',
            }}
          >
            {/* <Box mx={1} fontSize={4}>
              <SocialLink name="Repository" icon="github" url={repository} />
            </Box>
            <Box mx={1} fontSize={4}>
              <SocialLink name="Homepage" icon="globe" url={homepage} />
            </Box> */}
          </Flex>
          <ImageLabel
            bg="primary"
            color="background"
            position="bottom-right"
            round
          >
            {type}
          </ImageLabel>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
  </a>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

export default Project;
