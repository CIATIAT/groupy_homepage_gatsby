import styled from "styled-components";
import { Card as CardRebass } from "rebass/styled-components";

type CardContainerProps = {
  minWidth: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(auto-fill, minmax(${({ minWidth }) => minWidth}, 1fr));
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: "background",
  boxShadow: 0
})`
  position: relative;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;

  @media (min-width: 768px) {
    &:hover {
      top: -10px;
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;
