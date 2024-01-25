import styled from "styled-components";

export const GroupRadio = styled.p`
  & input {
    position: absolute;
    left: -9999px;
  }

  & label {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 147px;
    height: 80px;
    border: 1px solid ${(props) => props.theme.fonts.palette.primary};
    border-radius: 4px;
    cursor: pointer;
  }

  & svg path {
    fill: ${(props) => props.theme.fonts.palette.secondary};
  }

  & span {
    display: block;
    color: ${(props) => props.theme.fonts.palette.primary};
  }

  & input:checked + label {
    background-color: ${(props) => props.theme.fonts.palette.secondary};
    border: 1px solid ${(props) => props.theme.fonts.palette.secondary};
  }

  & input:checked + label svg path {
    fill: ${(props) => props.theme.fonts.palette.quinary};
  }

  & input:checked + label span {
    color: ${(props) => props.theme.fonts.palette.quinary};
  }

  & input:focus + label {
    outline: 4px solid ${(props) => props.theme.fonts.palette.quaternary};
    outline-offset: 2px;
  }
`;
