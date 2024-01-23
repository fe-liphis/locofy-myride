import { FormHelperText } from "@mui/material";
import styled from "styled-components";

export const ErrorFormText = styled(FormHelperText)`
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${(props) => props.theme.fonts.size.m};
`;
