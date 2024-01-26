import { render, screen } from "@testing-library/react";
import getCarType from "../getCarType";
import getFirstName from "../getFirstName";
import getTypeCarIcon from "../getTypeCarIcon";

test("get first name of Felipe Gabriel", () => {
  expect(getFirstName("Felipe Gabriel")).toBe("Felipe");
});

describe("get car type", () => {
  test("formated of suvVan", () => {
    expect(getCarType("suvVan")).toBe("SUV/Van");
  });

  test("formated of sedan", () => {
    expect(getCarType("sedan")).toBe("Sedan");
  });

  test("formated of semiLuxury", () => {
    expect(getCarType("semiLuxury")).toBe("Semi Luxury");
  });

  test("formated of luxuryCar", () => {
    expect(getCarType("luxuryCar")).toBe("Luxury Car");
  });

  test("on error", () => {
    expect(getCarType("Error")).toBe("Error");
  });
});

describe("display all icons of getTypeCarIcon", () => {
  test("returns Sedan icon for sedan type", () => {
    const Sedan = getTypeCarIcon("sedan");
    render(Sedan);

    const icon = screen.getByLabelText("Sedan Car Icon");

    expect(icon).not.toBeNull();
  });

  test("returns SuvVan icon for suvVan type", () => {
    const SuvVan = getTypeCarIcon("suvVan");
    render(SuvVan);

    const icon = screen.getByLabelText("SUV Van Car Icon");

    expect(icon).not.toBeNull();
  });

  test("returns SemiLuxury icon for semiLuxury type", () => {
    const SemiLuxury = getTypeCarIcon("semiLuxury");
    render(SemiLuxury);

    const icon = screen.getByLabelText("Semi Luxury Icon");

    expect(icon).not.toBeNull();
  });

  test("returns Sedan icon for luxuryCar type", () => {
    const LuxuryCar = getTypeCarIcon("luxuryCar");
    render(LuxuryCar);

    const icon = screen.getByLabelText("Luxury Car Icon");

    expect(icon).not.toBeNull();
  });

  test("returns Error", () => {
    const Error = getTypeCarIcon("Invalid Name");
    render(Error);

    const icon = screen.getByLabelText("Error Icon");

    expect(icon).not.toBeNull();
  });
});
