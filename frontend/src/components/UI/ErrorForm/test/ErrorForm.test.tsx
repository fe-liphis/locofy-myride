import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../../styles/MyThemeProvider";
import ErrorForm from "../ErrorForm";

describe("display ErrorForm", () => {
  test("with label: Error!", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <ErrorForm label="Error!" />
        </BrowserRouter>
      </MyThemeProvider>
    );

    const errorIcon = screen.getByLabelText(/error icon/i);
    const errorLabel = screen.getByText(/error!/i);

    expect(errorIcon).not.toBeNull();
    expect(errorLabel).not.toBeNull();
  });
});
