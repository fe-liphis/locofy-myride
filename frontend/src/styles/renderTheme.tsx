import { render } from "@testing-library/react";

import MyThemeProvider from "./MyThemeProvider";

export function renderTheme({ children }) {
  return render(<MyThemeProvider> {children}</MyThemeProvider>);
}
