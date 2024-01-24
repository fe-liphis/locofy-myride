import styled from "styled-components";

export const ClassRidesContainer = styled.section`
  width: 90%;
  margin: auto;
`;

export const ClassRidesTitle = styled.h2`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.xxl};
  font-weight: ${(props) => props.theme.fonts.weight.lg};
  text-align: center;
  margin-bottom: 60px;
`;

export const ClassRidesSubTitle = styled.h3`
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-size: ${(props) => props.theme.fonts.size.l};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export const CardsContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 5%;
  justify-content: center;
  margin-bottom: 100px;
`;
