import { TextField } from "@mui/material";
import styled from "styled-components";

export const TextFieldStyled = styled(TextField)`
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: ${(props) => props.theme.fonts.palette.quaternary};
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.theme.fonts.palette.secondary};
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.secondary};
    border-width: 1px;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.secondary};
  }
`;
