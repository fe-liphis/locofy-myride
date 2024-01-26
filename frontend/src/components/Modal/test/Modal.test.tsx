import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../../../styles/MyThemeProvider";
import ModalTemplate from "../Modal";

describe("display Modal component", () => {
  test("with fallback text: An Error Occurred", () => {
    render(
      <MyThemeProvider>
        <BrowserRouter>
          <ModalTemplate initialOpen={true}>
            <p>An Error Occurred</p>
          </ModalTemplate>
        </BrowserRouter>
      </MyThemeProvider>
    );

    const errorTitle = screen.findByText(/An Error Occurred/i);

    expect(errorTitle).not.toBeNull();
  });
});
