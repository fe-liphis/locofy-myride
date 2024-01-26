import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import Switch from "../Switch";

test("display Switch component", () => {
  render(
    <MyThemeProvider>
      <BrowserRouter>
        <Switch />
      </BrowserRouter>
    </MyThemeProvider>
  );

  const switchElement = screen.getByLabelText(/switch/i);

  expect(switchElement).not.toBeNull();
});
