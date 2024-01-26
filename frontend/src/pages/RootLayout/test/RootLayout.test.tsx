import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../styles/MyThemeProvider";
import RootLayout from "../RootLayout";

test("display RootLayout", () => {
  render(
    <MyThemeProvider>
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    </MyThemeProvider>
  );

  const home = screen.getByText(/home/i);
  const gettingTaxi = screen.getByText(/Getting a Taxi/i);
  const mobileApp = screen.getAllByText(/Mobile App/i);
  const contactUs = screen.getAllByText(/Contact Us/i);

  expect(home).not.toBeNull();
  expect(gettingTaxi).not.toBeNull();
  expect(mobileApp).not.toBeNull();
  expect(contactUs).not.toBeNull();
});
