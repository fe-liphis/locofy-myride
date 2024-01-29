import jsonCountriesAndCities from "../../../../utils/countriesAndCities.json";

export type FormValues = {
  fullName: string;
  email: string;
  country: string;
  city: string;
  code: string;
  myOwnCar: boolean;
  carType: string;
};

export type CountriesAndCities = typeof jsonCountriesAndCities;
export type Countries = keyof CountriesAndCities;
export type Cities = CountriesAndCities[Countries];
