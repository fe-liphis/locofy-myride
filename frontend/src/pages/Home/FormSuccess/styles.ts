import styled from "styled-components";
import Button from "../../../components/UI/Button/Button";
import { CircularProgress } from "@mui/material";

export const FormSuccessContainer = styled.section`
  background-color: ${(props) => props.theme.background.palette.secondary};
  padding: 25px;
  border-radius: 10px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 100px;
`;

export const FormSuccessTitle = styled.h3`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.xxl};
  font-weight: ${(props) => props.theme.fonts.weight.lg};
`;

export const FormSuccessTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  align-self: center;
`;

export const FormSuccessButton = styled(Button)`
  align-self: center;
`;

export const FormSuccessCarTypeFallback = styled.p`
  color: ${(props) => props.theme.fonts.palette.primary};
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 55px;
  column-gap: 100px;
`;

export const InfoTitle = styled.h5`
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-size: ${(props) => props.theme.fonts.size.m};
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.fonts.palette.secondary};
`;

export const InfoDescription = styled.p`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.xl};
`;

export const InfoControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 5px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const FigureContainer = styled.figure`
  width: 30%;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const FetchingTitle = styled.p`
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-size: ${(props) => props.theme.fonts.size.ml};
  text-align: center;
`;

export const FetchingImg = styled.img`
  width: 50%;
  margin: auto;
`;

export const FetchingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Progress = styled(CircularProgress)`
  svg {
    color: ${(props) => props.theme.fonts.palette.secondary};
  }
`;
