import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import FormHome from "../FormHome";

describe("display FormHome component", () => {
  test("header", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <FormHome />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const title = screen.getByText(/Drive with MyRide/i);
    const subTitle = screen.getByText(
      /Register as a driver using the form below. Our team will assess and get back to you within 48 hours./i
    );

    expect(title).not.toBeNull();
    expect(subTitle).not.toBeNull();
  });
});
