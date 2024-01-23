import styled from "styled-components";

export const FormHomeContainer = styled.form`
  background-color: ${(props) => props.theme.background.palette.secondary};
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
