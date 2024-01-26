import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import Button from "../Button";

describe("display Button component", () => {
  test("with name: Click me!", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Button>Click me!</Button>
        </BrowserRouter>
      </MyThemeProvider>
    );

    const button = screen.findByRole("button", { name: /Click me!/i });

    expect(button).not.toBeNull();
  });
});
