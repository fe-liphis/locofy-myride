import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import LuxuryCar from "../TypeCar/LuxuryCar";
import Sedan from "../TypeCar/Sedan";
import SemiLuxury from "../TypeCar/SemiLuxury";
import SuvVan from "../TypeCar/SuvVan";
import Check from "../Check";
import Error from "../Error";

describe("display Icons components", () => {
  test("Luxury Car Icon", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <LuxuryCar />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const icon = screen.getByLabelText(/Luxury Car Icon/i);

    expect(icon).not.toBeNull();
  });

  test("Sedan Car Icon", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Sedan />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const icon = screen.getByLabelText(/Sedan Car Icon/i);

    expect(icon).not.toBeNull();
  });

  test("Semi Luxury Icon", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <SemiLuxury />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const icon = screen.getByLabelText(/Semi Luxury Icon/i);

    expect(icon).not.toBeNull();
  });

  test("SUV/Van Car Icon", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <SuvVan />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const icon = screen.getByLabelText(/SUV Van Car Icon/i);

    expect(icon).not.toBeNull();
  });

  test("Check Icon", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Check />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const icon = screen.getByLabelText(/Ok Icon/i);

    expect(icon).not.toBeNull();
  });

  test("Error Icon", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const icon = screen.getByLabelText(/Error Icon/i);

    expect(icon).not.toBeNull();
  });
});
