import jsonCountriesAndCities from "../../../../utils/countriesAndCities.json";

export type CountriesAndCities = typeof jsonCountriesAndCities;
export type Countries = keyof CountriesAndCities;
export type Cities = CountriesAndCities[Countries];
