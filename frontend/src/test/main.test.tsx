// App.test.tsx
import { test } from "vitest";
import MyThemeProvider from "../styles/MyThemeProvider";
import { createRoot } from "react-dom/client";
import App from "../App";
import { screen } from "@testing-library/react";

test("renders root", () => {
  const root = createRoot(document.createElement("div"));

  root.render(
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  );

  const findDriverImage = screen.findAllByAltText(
    /Street with a highlighted yellow car and a yellow my ride logo on top/i
  );

  expect(findDriverImage).not.toBeNull();
});
