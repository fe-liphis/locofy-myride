import { test } from "vitest";
import Footer from "../Footer.tsx";
import { render, screen } from "@testing-library/react";
import MyThemeProvider from "../../../styles/MyThemeProvider.tsx";

describe("display footer", () => {
  test("contact's info", async () => {
    render(
      <MyThemeProvider>
        <Footer />
      </MyThemeProvider>
    );

    const address = screen.getByText(
      /MyRide Inc., 2nd Floor, New York, NY 10016/i
    );

    const facebookLogo = screen.getByAltText(/facebook logo/i);
    const instagramLogo = screen.getByAltText(/instagram logo/i);
    const twitterLogo = screen.getByAltText(/twitter logo/i);

    expect(address).not.toBeNull();
    expect(facebookLogo).not.toBeNull();
    expect(instagramLogo).not.toBeNull();
    expect(twitterLogo).not.toBeNull();
  });
});
