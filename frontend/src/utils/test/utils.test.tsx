import { render, screen } from "@testing-library/react";
import getCarType from "../getCarType";
import getFirstName from "../getFirstName";
import getTypeCarIcon from "../getTypeCarIcon";

test("get first name of Felipe Gabriel", () => {
  expect(getFirstName("Felipe Gabriel")).toBe("Felipe");
});

test("get car type formated of suvVan", () => {
  expect(getCarType("suvVan")).toBe("SUV/Van");
});

test("returns Sedan icon for sedan type", () => {
  const Sedan = getTypeCarIcon("sedan");
  render(Sedan);

  const icon = screen.getByLabelText("Sedan Car Icon");

  expect(icon).not.toBeNull();
});
