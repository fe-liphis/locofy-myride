import styled from "styled-components";

export const FormHomeContainer = styled.form`
  background-color: ${(props) => props.theme.background.palette.secondary};
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormHeader = styled.header`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const FormHomeTitle = styled.h4`
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-size: ${(props) => props.theme.fonts.size.l};
  font-weight: ${(props) => props.theme.fonts.weight.lg};
  margin-bottom: 15px;
`;

export const FormHomeParagraph = styled.h4`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.s};
`;

export const FieldsetLegend = styled.legend`
  color: ${(props) => props.theme.fonts.palette.secondary};
`;

export const FieldsetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarTypeContainer = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 12px;
`;
