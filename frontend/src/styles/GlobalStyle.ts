import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    body {
        background-color: ${(props) => props.theme.background.palette.primary};
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
