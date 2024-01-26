import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import FindDriver from "../FindDriver";

describe("display FindDriver component", () => {
  test("img", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <FindDriver />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const findDriverImage = screen.findAllByAltText(
      /Street with a highlighted yellow car and a yellow my ride logo on top/i
    );

    expect(findDriverImage).not.toBeNull();
  });

  test("inputs", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <FindDriver />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const pickup = screen.getByLabelText(/your pickup/i);
    const destination = screen.getByLabelText(/your destination/i);
    const button = screen.getByLabelText(/find a driver/i);

    expect(pickup).not.toBeNull();
    expect(destination).not.toBeNull();
    expect(button).not.toBeNull();
  });
});
