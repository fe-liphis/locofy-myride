import styled from "styled-components";
import Button from "../../../components/UI/Button/Button";

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
