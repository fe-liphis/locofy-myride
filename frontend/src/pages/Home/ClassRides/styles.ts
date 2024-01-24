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
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 5%;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
