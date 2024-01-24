import { Button } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20vw;
  background-color: ${(props) => props.theme.background.palette.tertiary};
  height: 100%;
  
  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h5`
  color: ${(props) => props.theme.fonts.palette.primary};
`;

export const CardParagraph = styled.p`
  color: ${(props) => props.theme.fonts.palette.tertiary};
`;

export const CardContentWrapper = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardButton = styled(Button)`
  width: fit-content;
  color: ${(props) => props.theme.fonts.palette.secondary} !important;

  .Mui-focusVisible {
    background-color: ${(props) =>
      props.theme.fonts.palette.secondary} !important;
  }

  align-self: flex-end;
`;
