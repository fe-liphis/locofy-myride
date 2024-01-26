import { test } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";

test("Deve renderizar o App", () => {
  render(<App />);

  const findDriverImage = screen.findAllByAltText(
    /Street with a highlighted yellow car and a yellow my ride logo on top/i
  );

  expect(findDriverImage).not.toBeNull();
});
