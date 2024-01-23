import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background.palette.primary};
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
