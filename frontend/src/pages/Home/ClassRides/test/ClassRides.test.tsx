import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import ClassRides from "../ClassRides";

describe("display ClassRides component", () => {
  test("title", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <ClassRides />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const title = screen.getByText(/Why should you ride with us?/i);
    const subTitle = screen.getByText(/Best in class rides?/i);

    expect(title).not.toBeNull();
    expect(subTitle).not.toBeNull();
  });
});
