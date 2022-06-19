import { ReactNode } from "react";
import styled from "styled-components";

const ForSP = ({ children }: { children: ReactNode }) => {
  return <SPWrapper>{children}</SPWrapper>;
};

const SPWrapper = styled.div`
  @media screen and (min-width: 721px) {
    display: none;
  }
`;

const ForPC = ({ children }: { children: ReactNode }) => {
  return <PCWrapper>{children}</PCWrapper>;
};

const PCWrapper = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export { ForSP, ForPC };
