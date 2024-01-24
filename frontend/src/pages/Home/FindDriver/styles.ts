import styled from "styled-components";

export const FindDriverContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
  margin: 74px 0;
  margin-bottom: calc(74px + 59px);
`;

export const FindDriverTitle = styled.h1`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.xxxl};
  margin-bottom: 30px;
`;

export const FindDriverTitleStrong = styled.strong`
  color: ${(props) => props.theme.fonts.palette.secondary};
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
