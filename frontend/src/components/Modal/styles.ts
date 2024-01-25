import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: ${(props) => props.theme.background.palette.secondary};
  box-shadow: 24;
  padding: 25px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    width: 65%;
  }
`;
