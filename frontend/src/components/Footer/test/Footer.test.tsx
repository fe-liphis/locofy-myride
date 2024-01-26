import { test } from "vitest";
import { renderTheme } from "../../../styles/renderTheme.tsx";
import Footer from "../Footer.tsx";

test("render footer", () => {
  renderTheme(<Footer />);
});
