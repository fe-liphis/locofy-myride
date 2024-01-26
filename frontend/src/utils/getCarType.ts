function getCarType(carType: string | undefined) {
  if (carType === "sedan") return "Sedan";
  if (carType === "suvVan") return "SUV/Van";
  if (carType === "semiLuxury") return "Semi Luxury";
  if (carType === "luxuryCar") return "Luxury Car";

  return carType;
}

export default getCarType;
