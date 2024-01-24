import { FormControl, Select } from "@mui/material";
import styled from "styled-components";

export const FormControlSelect = styled(FormControl)`
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    color: ${(props) => props.theme.fonts.palette.quaternary};
  }

  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-bpeome-MuiSvgIcon-root-MuiSelect-icon {
    color: ${(props) => props.theme.fonts.palette.secondary};
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.theme.fonts.palette.secondary};
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.secondary};
    border-width: 1px;
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:hover
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.fonts.palette.secondary};
  }

  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon.Mui-disabled {
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-disabled
    .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) =>
      props.error ? "#d32f2f" : props.theme.fonts.palette.primary};
  }
`;
