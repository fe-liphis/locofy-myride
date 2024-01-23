import { Switch } from "@mui/material";
import styled from "styled-components";

export const YellowSwitch = styled(Switch)`
  .MuiSwitch-switchBase.Mui-checked {
    color: ${(props) => props.theme.fonts.palette.secondary};
  }
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: ${(props) => props.theme.fonts.palette.secondary};
  }
`;
