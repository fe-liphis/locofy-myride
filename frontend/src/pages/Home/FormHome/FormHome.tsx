import {
  CarTypeContainer,
  FieldsetContainer,
  FieldsetLegend,
  FormHeader,
  FormHomeContainer,
  FormHomeParagraph,
  FormHomeTitle,
} from "./styles";

import form_image from "../../../assets/form_image.png";
import Switch from "../../../components/UI/Switch/Switch";
import { useEffect, useState } from "react";
import Button from "../../../components/UI/Button/Button";
import { FormHelperText, InputLabel, MenuItem } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextFieldStyled } from "../../../components/UI/Input/styles";
import { GroupRadio } from "../../../components/UI/InputRadio/styles";
import { FormControlSelect } from "../../../components/UI/Select/styles";
import ErrorForm from "../../../components/UI/ErrorForm/ErrorForm";
import FormSucess from "./FormSucess";
import Sedan from "../../../components/UI/Svgs/TypeCar/Sedan";
import SuvVan from "../../../components/UI/Svgs/TypeCar/SuvVan";
import SemiLuxury from "../../../components/UI/Svgs/TypeCar/SemiLuxury";
import LuxuryCar from "../../../components/UI/Svgs/TypeCar/LuxuryCar";

export type FormValues = {
  fullName: string;
  email: string;
  country: string;
  city: string;
  code: string;
  carType: string;
};

function FormHome() {
  const [carTypeChecked, setCarTypeChecked] = useState(true);
  const [countriesAndCities, setCountriesAndCities] = useState();
  const [countries, setCountries] = useState<Array<string>>([]);
  const [selectedCountry, setSelectedCountrie] = useState<string>("");
  const [cities, setCities] = useState<Array<string>>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [sendedData, setSendedData] = useState<FormValues>({});

  console.log(sendedData);

  const schema = z.object({
    fullName: z
      .string()
      .min(10, "Invalid name")
      .regex(/^[^\d]+ [^\d]+$/i, "Invalid name"),
    email: z.string().min(1, "Invalid email").email("Invalid email"),
    country: z.string().min(1, "Invalid country"),
    city: z.string().min(1, "Invalid city"),
    code: z.string().regex(/^[A-Z]{3}-\d{3}$/, "Invalid code"),
    carType: z
      .string()
      .refine((data: string) => !carTypeChecked || data !== "", {
        message: "Invalid car type",
      }),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      carType: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = form;

  useEffect(() => {
    async function fetchCoutries() {
      async function fetchData() {
        const res = await fetch(
          "https://file.notion.so/f/f/c4f7bc66-0bd3-49f2-a56a-5b4cd35ab92a/f97598b4-0503-410d-9973-67467026136d/countries-and-cities.json?id=f85395c6-6876-4794-879b-0f949922a7f9&table=block&spaceId=c4f7bc66-0bd3-49f2-a56a-5b4cd35ab92a&expirationTimestamp=1706068800000&signature=nzvh-UQIHVHGfJ4rO8GYz0FLMQ3b3pykdIvGE3ZQcxg&downloadName=countries-and-cities.json"
        );
        const data = await res.json();
        return data;
      }
      const data = await fetchData();
      setCountriesAndCities(data);
      const countries = Object.keys(data);
      setCountries(countries);
    }
    fetchCoutries();
  }, []);

  function onSubmit(data: FormValues) {
    try {
      fetch("http://localhost:3000/driver/1", {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }

    fetch("http://localhost:3000/driver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, id: "1" }),
    });

    async function fetchDriverRegister() {
      async function fetchData() {
        const res = await fetch("http://localhost:3000/driver/1");
        const data = await res.json();
        return data;
      }
      const driverRegister = await fetchData();

      setSendedData(driverRegister);
    }

    fetchDriverRegister();
  }

  function handleChangeCountries(event: SelectChangeEvent) {
    const country = event.target.value as string;
    setSelectedCountrie(country);

    if (countriesAndCities) {
      const cities = countriesAndCities[country];
      setCities(cities);
    }
  }

  function handleChangeCity(event: SelectChangeEvent) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function onChangeSwitchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCarTypeChecked(event.target.checked);
  }

  return (
    <>
      <FormHomeContainer onSubmit={handleSubmit(onSubmit)}>
        {sendedData.fullName ? (
          <FormSucess {...sendedData} />
        ) : (
          <>
            <FormHeader>
              <img src={form_image} alt="" />
              <div>
                <FormHomeTitle>Drive with MyRide</FormHomeTitle>
                <FormHomeParagraph>
                  Register as a driver using the form below. Our team will
                  assess and get back to you within 48 hours.
                </FormHomeParagraph>
              </div>
            </FormHeader>
            <TextFieldStyled
              id="fullName"
              label="Full Name"
              error={errors.fullName ? true : false}
              {...register("fullName")}
            />
            {errors.fullName && (
              <ErrorForm label={errors.fullName?.message || "Invalid name"} />
            )}
            <TextFieldStyled
              id="email"
              label="Email"
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <FormControlSelect>
              <InputLabel>Country</InputLabel>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    labelId="country-label"
                    id={"country"}
                    label="Country"
                    value={selectedCountry}
                    error={errors.country ? true : false}
                    onChange={(e) => {
                      handleChangeCountries(e);
                      field.onChange(e); // Usa field.onChange ao invés de register
                    }}
                  >
                    {countries.map((countrie, index) => (
                      <MenuItem value={countrie} key={index}>
                        {countrie}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.country && <ErrorForm label="Invalid country" />}
            </FormControlSelect>
            <FormControlSelect>
              <InputLabel>City</InputLabel>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      labelId="city-label"
                      id="city"
                      label="City"
                      value={selectedCity}
                      error={errors.city ? true : false}
                      onChange={(e) => {
                        handleChangeCity(e);
                        field.onChange(e);
                      }}
                    >
                      {cities.map((city, index) => (
                        <MenuItem value={city} key={index}>
                          {city}
                        </MenuItem>
                      ))}
                    </Select>
                  </>
                )}
              />
              {errors.city && (
                <FormHelperText error>Invalid city</FormHelperText>
              )}
            </FormControlSelect>
            <TextFieldStyled
              id="code"
              label="Referal Code"
              error={errors.code ? true : false}
              helperText={errors.code?.message}
              {...register("code")}
            />
            <FieldsetContainer aria-label="fieldset">
              <FieldsetLegend>Select your car type</FieldsetLegend>
              <Switch
                checked={carTypeChecked}
                onChange={onChangeSwitchHandler}
                inputProps={{ "aria-label": "controlled" }}
              />
            </FieldsetContainer>
            {carTypeChecked && (
              <fieldset>
                <CarTypeContainer>
                  <GroupRadio>
                    <input
                      type="radio"
                      id={"sedan"}
                      value={"sedan"}
                      {...register("carType")}
                    />
                    <label htmlFor={"sedan"}>
                      <Sedan />
                      <span>Sedan</span>
                    </label>
                  </GroupRadio>
                  <GroupRadio>
                    <input
                      type="radio"
                      id={"suvVan"}
                      value={"suvVan"}
                      {...register("carType")}
                    />
                    <label htmlFor={"suvVan"}>
                      <SuvVan />
                      <span>SUV/Van</span>
                    </label>
                  </GroupRadio>
                  <GroupRadio>
                    <input
                      type="radio"
                      id={"semiLuxury"}
                      value={"semiLuxury"}
                      {...register("carType")}
                    />
                    <label htmlFor={"semiLuxury"}>
                      <SemiLuxury />
                      <span>Semi Luxury</span>
                    </label>
                  </GroupRadio>
                  <GroupRadio>
                    <input
                      type="radio"
                      id={"luxuryCar"}
                      value={"luxuryCar"}
                      {...register("carType")}
                    />
                    <label htmlFor={"luxuryCar"}>
                      <LuxuryCar />
                      <span>Luxury Car</span>
                    </label>
                  </GroupRadio>
                </CarTypeContainer>
                {errors.carType && (
                  <FormHelperText error>
                    {errors.carType?.message}
                  </FormHelperText>
                )}
              </fieldset>
            )}
            <Button type="submit">Submit</Button>
          </>
        )}
      </FormHomeContainer>
    </>
  );
}

export default FormHome;
