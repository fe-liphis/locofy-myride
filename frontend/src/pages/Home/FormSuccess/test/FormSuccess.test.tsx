import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import FormSucess from "../FormSuccess";

describe("display FormSuccess component", () => {
  test("with driver infos", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <FormSucess handleOnClick={() => {}} />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const fullName = screen.findByText(/Felipe Gabriel Costa de Oliveira/i);

    expect(fullName).not.toBeNull();
  });
});
