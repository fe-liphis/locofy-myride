import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import MyThemeProvider from "../../../../styles/MyThemeProvider";

describe("display Card component", () => {
  test("with Vitest description!", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Card
            img="https://miro.medium.com/v2/resize:fit:1144/0*joMtvI-qjRlrynxy.jpg"
            imgAlt="Vitest Logo"
            text="Reuse Vite's config and plugins - consistent across your app and tests. But it's not required to use Vitest!"
            title="Vite Powered"
          />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const cardImg = screen.findByAltText(/vitest logo/i);
    const cardTitle = screen.findByText(/Vite Powered/i);
    const cardText = screen.findByText(
      /Reuse Vite's config and plugins - consistent across your app and tests. But it's not required to use Vitest!/i
    );

    expect(cardImg).not.toBeNull();
    expect(cardTitle).not.toBeNull();
    expect(cardText).not.toBeNull();
  });
});
