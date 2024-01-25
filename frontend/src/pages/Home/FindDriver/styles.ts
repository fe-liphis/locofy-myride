import styled from "styled-components";
import Button from "../../../components/UI/Button/Button";
import { TextFieldStyled } from "../../../components/UI/Input/styles";

export const FindDriverContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
  margin: 74px 0;
  margin-bottom: calc(74px + 59px);
`;

export const FindDriverTitle = styled.h2`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.xxxl};
  margin-bottom: 30px;
  font-weight: ${(props) => props.theme.fonts.weight.lg};
`;

export const FindDriverTitleStrong = styled.strong`
  font-style: italic;
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-weight: ${(props) => props.theme.fonts.weight.md};

  span {
    font-style: normal;
    font-weight: ${(props) => props.theme.fonts.weight.lg};
  }
`;

export const FindDriverSubTitle = styled.h1`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.l};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fonts.weight.md};
  margin-bottom: 5px;
`;

export const FindDriverFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 33px;
  background-color: ${(props) => props.theme.background.palette.secondary};
  border-radius: 4px;
`;

export const FindDriverFormTitle = styled.h3`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.ml};
  font-weight: ${(props) => props.theme.fonts.weight.lg};
`;

export const TextFieldSearch = styled(TextFieldStyled)`
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    svg path {
      fill: ${(props) => props.theme.fonts.palette.secondary};
    }
    border-color: ${(props) => props.theme.fonts.palette.secondary};
    border-width: 1px;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.secondary} !important;
  }

  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  :hover {
    svg path {
      fill: ${(props) => props.theme.fonts.palette.secondary};
    }
  }
`;

export const ButtonFindDriver = styled(Button)`
  width: 100%;
`;
