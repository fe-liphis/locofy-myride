import styled from "styled-components";

export const FormHomeContainer = styled.form`
  background-color: ${(props) => props.theme.background.palette.secondary};
  padding: 30px;
  border-radius: 10px;
  width: var(100% - 30px);
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 50px;
  margin-bottom: 100px;
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

export const CarTypeLabel = styled.label`
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-size: ${(props) => props.theme.fonts.size.m};
  margin-bottom: 11px;
`;

export const FieldsetLegend = styled.legend`
  color: ${(props) => props.theme.fonts.palette.primary};
  font-size: ${(props) => props.theme.fonts.size.s};
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

export const FormControlInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ModalTitle = styled.h6`
  color: ${(props) => props.theme.fonts.palette.secondary};
  font-size: 30px;
  font-weight: ${(props) => props.theme.fonts.weight.lg};
`;
