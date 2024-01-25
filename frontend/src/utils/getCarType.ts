function getCarType(carType: string | undefined) {
  if (carType === "sendan") return "Sedan";
  if (carType === "suvVan") return "SUV/Van";
  if (carType === "semiLuxury") return "Semi Luxury";
  if (carType === "luxuryCar") return "Luxury Car";

  return "Car type not selected";
}

export default getCarType;
