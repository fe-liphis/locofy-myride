import { test } from "vitest";
import MyThemeProvider from "../../../styles/MyThemeProvider";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("display header", () => {
  test("logo", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const logo = screen.getByLabelText(/redirect to home/i);

    expect(logo).not.toBeNull();
  });

  test("links", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const home = screen.getByText(/home/i);
    const gettingTaxi = screen.getByText(/Getting a Taxi/i);
    const mobileApp = screen.getByText(/Mobile App/i);
    const homeLink = screen.getByText(/home/i);

    expect(home).not.toBeNull();
    expect(gettingTaxi).not.toBeNull();
    expect(mobileApp).not.toBeNull();
    expect(homeLink).not.toBeNull();
  });

  test("imagens", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const bell = screen.getByAltText(/Bell with a notification/i);
    const woman = screen.getByAltText(
      /Profile photo of a woman with a blue background and yellow blouse/i
    );

    expect(bell).not.toBeNull();
    expect(woman).not.toBeNull();
  });
});
