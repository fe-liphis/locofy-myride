import jsonCountriesAndCities from "../../../../utils/countriesAndCities.json";

export type FormValues = {
  fullName: string;
  email: string;
  country: string;
  city: string;
  code: string;
  carType: string;
  myOwnCar: boolean;
};

export type CountriesAndCities = typeof jsonCountriesAndCities;
export type Countries = keyof CountriesAndCities;
export type Cities = CountriesAndCities[Countries];
