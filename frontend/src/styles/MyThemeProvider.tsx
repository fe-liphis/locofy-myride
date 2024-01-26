import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ResetCSS from "./ResetCSS";
import GlobalStyle from "./GlobalStyle";

function MyThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;
