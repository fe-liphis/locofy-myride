import styled from "styled-components";
import Button from "../../../components/UI/Button/Button";

export const FormSuccessContainer = styled.section`
  background-color: ${(props) => props.theme.background.palette.secondary};
  padding: 30px;
  border-radius: 10px;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  flex-direction: column;
  width: 50%;
  gap: 14px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FigureContainer = styled.figure`
  width: 30%;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;
